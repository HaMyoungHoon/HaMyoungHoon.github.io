export enum LangType {
  'ko' = '한국어',
  'en' = "English",
}

export function getKeyName(value: LangType) {
  return Object.entries(LangType).find(([key, val]) => val === value)?.[0];
}
