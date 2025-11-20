export const getFileName = (path: string): string => path.split(/[/\\]/).pop()!;
export const getFileExtension = (path: string): string =>
  path.split('.').pop()?.toLowerCase() || '';
export const splitFileExtension = (name: string): string => name.split('.')[0] || '';
export const isEmpty = (str: string | null): boolean => str == null || str.trim().length === 0;
