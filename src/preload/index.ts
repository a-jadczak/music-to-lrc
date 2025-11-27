import { contextBridge } from 'electron';
import * as FilesAPI from './api/fileDialog';
import * as LanguagesAPI from './api/languages';

const api = {
  ...FilesAPI,
  ...LanguagesAPI
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  //@ts-ignore
  window.api = api;
}
