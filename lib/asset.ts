const BASE = process.env.NODE_ENV === "production" ? "/post118-org" : "";

export function imgPath(src: string): string {
  return `${BASE}${src}`;
}
