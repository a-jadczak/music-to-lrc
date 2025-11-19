declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

interface OpenDialogResult {
  canceled: boolean;
  filePaths: string[];
}

export interface ElectronAPI {
  uploadFiles: () => Promise<OpenDialogResult>;
  openDirectory: () => Promise<OpenDialogResult>;
}
