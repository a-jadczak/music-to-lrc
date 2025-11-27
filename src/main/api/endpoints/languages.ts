import { ipcMain } from 'electron';
import { api } from './../client';

ipcMain.handle('get-languages', async () => {
  const res = await api.get('/translation/supported-languages');
  return res.data;
});
