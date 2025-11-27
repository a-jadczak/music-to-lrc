import { contextBridge } from 'electron';
import * as FilesAPI from './api/files';
import * as LanguagesAPI from './api/languages';

const api = {
  ...FilesAPI,
  ...LanguagesAPI
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electronAPI', api);
  } catch (error) {
    console.error(error);
  }
} else {
  //@ts-ignore
  window.electronAPI = api;
}
