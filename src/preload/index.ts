import { contextBridge, ipcRenderer } from 'electron';

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electronAPI', {
      uploadFiles: () => ipcRenderer.invoke('upload-files'),
      openDirectory: () => ipcRenderer.invoke('open-directory')
    });
  } catch (error) {
    console.error(error);
  }
} else {
  //@ts-ignore
  window.electronAPI = {
    uploadFiles: () => ipcRenderer.invoke('upload-files'),
    openDirectory: () => ipcRenderer.invoke('open-directory')
  };
}
