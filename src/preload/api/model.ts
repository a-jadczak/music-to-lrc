import { ipcRenderer } from 'electron';

export const getModels = (): Promise<string[]> => ipcRenderer.invoke('get-models');
export const getModelWeight = (modelName: string): Promise<number> =>
  ipcRenderer.invoke('get-model-weight', modelName);
export const getIsModelInstalled = (modelName: string): Promise<boolean> =>
  ipcRenderer.invoke('get-is-model-installed', modelName);
