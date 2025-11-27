import { ipcMain } from 'electron';
import { api } from './../client';

export const registerAPIHandlers = () => {
  ipcMain.handle('get-languages', async () => {
    const res = await api.get('/translation/supported-languages');
    return res.data;
  });
};
