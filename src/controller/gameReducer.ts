import { applyActOutcome, buildCheckEvidence, clamp, completeCheckAudit, createActRound, createOperationSeed, doRequestFor, effectiveDoDuration, evaluateActAnswer, moveDoTask, newGame, planProjects, planPurchasePrices, resolveDoRound, result, type Action, type GameState } from '../domain/game';

function finishDo(state:GameState,now:number,timedOut:boolean):GameState{
 if(!state.doStarted||state.doResult||state.doStartedAt===null)return state;
 const resolved=resolveDoRound({tasks:state.doTasks,planChoice:state.planChoice,applyPlanImpact:state.planChoice!==null&&state.planInventory.includes(state.planChoice),duration:state.doDuration,startedAt:state.doStartedAt,now,timedOut,completedAt:now,errors:state.doErrors,coinsLost:state.doCoinsLost,moralLost:state.doMoralLost,moral:state.moral,requestOption:state.doTaskOption});
 return {...state,doRemaining:0,doResult:resolved.doResult,doMoralLost:resolved.doResult.moralLost,doGrossDelayReduction:resolved.grossDelayReduction,checkCondition:state.doAutomaticPlan?'nerf':state.checkSampledCondition,checkSelectedEvidence:[],checkVerdictChoice:null,checkResult:undefined,delay:clamp(state.delay+resolved.delayChange,0,50),quality:clamp(state.quality+resolved.qualityChange,0,100),moral:clamp(state.moral+resolved.moralChange,0,100)};
}

export function startOperation(state:GameState):Extract<Action,{type:'START'}>{return {type:'START',seed:createOperationSeed(state.seed)}}

export function createGameReducer(){
 return function reducer(state:GameState,action:Action):GameState{
  if(action.type==='START'&&state.phase==='home'){return {...newGame(action.seed),phase:'plan'}}
  if(action.type==='HOME'&&(state.phase==='victory'||state.phase==='defeat'))return newGame(state.seed);
  if(action.type==='SELECT_PLAN_OFFER'&&state.phase==='plan'&&(action.id===null||planProjects.includes(action.id)))return {...state,planOfferChoice:action.id};
  if(action.type==='BUY_PLAN_PROJECT'&&state.phase==='plan'&&planProjects.includes(action.id)&&!state.planInventory.includes(action.id)&&state.planBoughtThisWeek.length<planPurchasePrices.length&&planPurchasePrices[state.planBoughtThisWeek.length]<=state.balance){const cost=planPurchasePrices[state.planBoughtThisWeek.length];return {...state,balance:state.balance-cost,planInventory:[...state.planInventory,action.id],planBoughtThisWeek:[...state.planBoughtThisWeek,action.id],planOfferChoice:action.id,planChoice:action.id}}
  if(action.type==='CHOOSE_PLAN_PROJECT'&&state.phase==='plan'&&(action.id===null||(state.planInventory.includes(action.id)&&planProjects.includes(action.id))))return {...state,planChoice:action.id};
  if(action.type==='OPEN'&&state.phase==='plan')return {...state,phase:'do',week:2,planChoice:state.planChoice??'inspect',doCondition:state.planChoice?state.doSampledCondition:'nerf',doMultiplier:state.planChoice?state.doSampledMultiplier:.8,doAutomaticPlan:!state.planChoice,doForcedNerf:!state.planChoice};
  if(action.type==='START_DO'&&state.phase==='do'&&!state.doStarted&&!state.doResult){const duration=effectiveDoDuration(state.doMultiplier);return {...state,doStarted:true,doDuration:duration,doRemaining:duration,doStartedAt:action.now}}
  if(action.type==='MOVE_TASK'&&state.phase==='do'&&state.doStarted&&!state.doResult&&state.doRemaining>0&&Object.hasOwn(state.doTasks,action.id)&&(['todo','doing','done'] as string[]).includes(action.status)){
   if(state.doStartedAt!==null&&action.now-state.doStartedAt>=state.doDuration*1000)return finishDo(state,action.now,true);
   const move=moveDoTask({tasks:state.doTasks,planChoice:state.planChoice,id:action.id,status:action.status,balance:state.balance,moral:state.moral,requestOption:state.doTaskOption});
   const remaining=Math.max(0,state.doDuration-Math.max(0,action.now-state.doStartedAt!)/1000);
   const next={...state,doRemaining:remaining,doTasks:move.tasks,balance:move.balance,moral:clamp(state.moral+move.moralChange,0,100),doErrors:state.doErrors+(move.error?1:0),doCoinsLost:state.doCoinsLost+move.coinsLost,doMoralLost:state.doMoralLost-move.moralChange};
   if(doRequestFor(state.planChoice,state.doTaskOption).tasks.every(task=>next.doTasks[task.id]===task.target))return finishDo(next,action.now,false);
   return next;
  }
  if(action.type==='TICK_DO'&&state.phase==='do'&&state.doStarted&&!state.doResult&&state.doStartedAt!==null){const remaining=Math.max(0,state.doDuration-(Math.max(0,action.now-state.doStartedAt)/1000));return remaining===0?finishDo(state,action.now,true):{...state,doRemaining:remaining}}
  if(action.type==='CONTINUE'&&state.phase==='do'&&state.doResult)return {...state,phase:'check',week:3};
  if(action.type==='CHECK_SELECT_EVIDENCE'&&state.phase==='check'&&!state.checkResult){const evidence=buildCheckEvidence({planChoice:state.planChoice,condition:state.checkCondition,tasks:state.doTasks,doResult:state.doResult,requestOption:state.doTaskOption}).evidence;if(!evidence.some(item=>item.id===action.id))return state;const selected=state.checkSelectedEvidence.includes(action.id)?state.checkSelectedEvidence.filter(id=>id!==action.id):[...state.checkSelectedEvidence,action.id];return {...state,checkSelectedEvidence:selected}}
  if(action.type==='CHECK_SELECT_VERDICT'&&state.phase==='check'&&!state.checkResult&&['achieved','partial','not-achieved'].includes(action.verdict))return {...state,checkVerdictChoice:action.verdict};
  if(action.type==='COMPLETE_CHECK'&&state.phase==='check'&&!state.checkResult&&state.checkVerdictChoice){const investigation=buildCheckEvidence({planChoice:state.planChoice,condition:state.checkCondition,tasks:state.doTasks,doResult:state.doResult,requestOption:state.doTaskOption});const checkResult=completeCheckAudit({evidence:investigation.evidence,selected:state.checkSelectedEvidence,trueVerdict:investigation.trueVerdict,playerVerdict:state.checkVerdictChoice,condition:state.checkCondition,matchedCount:investigation.matchedCount});return {...state,checkResult}}
  if(action.type==='CONTINUE'&&state.phase==='check'&&state.checkResult){const condition=state.doAutomaticPlan?'nerf':state.actSampledCondition;const actRound=createActRound({seed:state.seed,week:4,condition,planChoice:state.planChoice,automatic:state.doAutomaticPlan,tasks:state.doTasks,doResult:state.doResult,checkResult:state.checkResult,requestOption:state.doTaskOption});return {...state,phase:'act',week:4,actCondition:condition,actRound,actSelectedIds:[],actResult:undefined}}
  if(action.type==='ACT_TOGGLE_CLAIM'&&state.phase==='act'&&state.actRound&&!state.actResult){if(!state.actRound.claims.some(claim=>claim.id===action.id))return state;const selected=state.actSelectedIds.includes(action.id)?state.actSelectedIds.filter(id=>id!==action.id):[...state.actSelectedIds,action.id];return {...state,actSelectedIds:selected}}
  if(action.type==='ACT_SUBMIT'&&state.phase==='act'&&state.actRound&&!state.actResult&&state.actSelectedIds.length>0){const answer=evaluateActAnswer(state.actRound,state.actSelectedIds);const outcome=applyActOutcome({...state,correct:answer.correct});const effects={delay:outcome.delay-state.delay,quality:outcome.quality-state.quality,moral:outcome.moral-state.moral,balance:outcome.balance-state.balance};const actResult={...answer,condition:state.actRound.condition,effects,lesson:state.actRound.lesson};return {...state,...outcome,actResult,actLessons:[...state.actLessons,state.actRound.lesson]}}
  if(action.type==='ACT'&&state.phase==='act'&&state.actResult){const won=result(state);return {...state,phase:won?'victory':'defeat'}}
  return state;
 };
}


export const reducer=createGameReducer();
