import { ipcRenderer } from 'electron';
import Language from '../../types/Language';
import TranscribeSettings from '../../types/TranscribeSettings';

export const getLanguages = (): Promise<Language[]> => ipcRenderer.invoke('get-languages');
export const getTranscribeSettings = (): Promise<TranscribeSettings> =>
  ipcRenderer.invoke('get-transcribe-settings');
export const getIsCudaAvailable = (): Promise<boolean> =>
  ipcRenderer.invoke('get-is-cuda-available');
