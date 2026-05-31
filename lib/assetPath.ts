export function assetPath(path: string): string {
  const base = process.env.NODE_ENV === 'production' ? '/post118-org' : '';
  return `${base}${path}`;
}
