const publicAssetPattern = /(["'(])\/(assets\/|(?:moedacta(?:-static)?|factory-icon)\.svg)/g;

export function withBasePath(content: string, basePath = import.meta.env.BASE_URL) {
  return content.replace(publicAssetPattern, `$1${basePath}$2`);
}
