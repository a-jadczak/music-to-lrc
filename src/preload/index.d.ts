import AudioFile from './../types/AudioFile';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

interface OpenDialogPathResult {
  canceled: boolean;
  filePaths: string[];
}

interface OpenDialogResult {
  canceled: boolean;
  files: AudioFile[];
}

export interface ElectronAPI {
  uploadFiles: () => Promise<OpenDialogResult>;
  openDirectory: () => Promise<OpenDialogPathResult>;
}
