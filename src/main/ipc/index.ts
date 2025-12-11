import { registerFileDialogHandlers } from './fileDialog';
import { registerAPIHandlers } from './api/endpoints/transcribeSettings';
import { registerModelAPIHandlers } from './api/endpoints/modelSettings';
import { registerDownloadWS } from './ws/download';
import { BrowserWindow } from 'electron';

export const registerIPCHandlers = (mainWindow: BrowserWindow) => {
  registerFileDialogHandlers();
  registerAPIHandlers();
  registerModelAPIHandlers();

  registerDownloadWS(mainWindow);
};
