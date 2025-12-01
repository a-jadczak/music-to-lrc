import { contextBridge } from 'electron';
import * as FilesAPI from './api/fileDialog';
import * as TranscribeSettingsAPI from './api/transcribeSettings';
import * as ModelAPI from './api/model';

const api = {
  ...FilesAPI,
  ...TranscribeSettingsAPI,
  ...ModelAPI
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
