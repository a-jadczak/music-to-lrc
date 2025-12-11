import { contextBridge } from 'electron';
import * as FilesAPI from './api/fileDialog';
import * as TranscribeSettingsAPI from './api/transcribeSettings';
import * as ModelAPI from './api/model';

import ws from './ws/download';

const api = {
  ...FilesAPI,
  ...TranscribeSettingsAPI,
  ...ModelAPI
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api);
    contextBridge.exposeInMainWorld('ws', ws);
    console.log(ws);
  } catch (error) {
    console.error(error);
  }
} else {
  //@ts-ignore
  window.api = api;
}
