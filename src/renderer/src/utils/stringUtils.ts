export const getFileName = (path: string) => path.split(/[/\\]/).pop()!;
export const getFileExtension = (path: string) => path.split('.').pop()?.toLowerCase() || '';
export const splitFileExtension = (name: string) => name.split('.')[0] || '';
