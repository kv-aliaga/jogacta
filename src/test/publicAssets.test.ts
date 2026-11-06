import { describe, expect, it } from 'vitest';
import { withBasePath } from '../app/publicAssets';

describe('withBasePath', () => {
  it('prefixa caminhos de imagens e fontes com o subdiretório publicado', () => {
    const markup = '<img src="/assets/acta-logo.png"><style>@font-face{src:url(/assets/font.ttf)}.coin{content:url("/moedacta-static.svg")}</style>';

    expect(withBasePath(markup, '/jogacta/')).toBe(
      '<img src="/jogacta/assets/acta-logo.png"><style>@font-face{src:url(/jogacta/assets/font.ttf)}.coin{content:url("/jogacta/moedacta-static.svg")}</style>',
    );
  });
});
