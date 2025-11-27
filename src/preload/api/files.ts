import { ipcRenderer } from 'electron';
import AudioFile from '../../types/AudioFile';

interface OpenDialogPathResult {
  canceled: boolean;
  filePaths: string[];
}

interface OpenDialogResult {
  canceled: boolean;
  files: AudioFile[];
}

export const uploadFiles = (): Promise<OpenDialogResult> => ipcRenderer.invoke('upload-files');
export const openDirectory = (): Promise<OpenDialogPathResult> =>
  ipcRenderer.invoke('open-directory');
