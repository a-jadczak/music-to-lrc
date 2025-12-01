import { ipcMain } from 'electron';
import { api } from '../client';

export const registerModelAPIHandlers = () => {
  ipcMain.handle('get-models', async () => {
    const res = await api.get('/models');
    return res.data;
  });

  ipcMain.handle('get-model-weight', async (_event, modelName: string) => {
    const res = await api.get(`/models/${modelName}/weight`);
    return res.data;
  });

  ipcMain.handle('get-is-model-installed', async (_event, modelName: string) => {
    const res = await api.get(`/models/${modelName}/is-installed`);
    return res.data;
  });
};
