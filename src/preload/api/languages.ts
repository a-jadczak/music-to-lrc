import { ipcRenderer } from 'electron';
import Language from '../../types/Language';

export const getLanguages = (): Promise<Language[]> => ipcRenderer.invoke('get-languages');
