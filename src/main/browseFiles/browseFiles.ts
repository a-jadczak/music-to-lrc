import { BrowserWindow, dialog, ipcMain } from 'electron';

ipcMain.handle('upload-files', async (e) => {
  const window = BrowserWindow.fromWebContents(e.sender);
  if (!window) return { canceled: true, filePaths: [] };

  const result = await dialog.showOpenDialog(window, {
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Audio Files', extensions: ['mp3', 'wav'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  return result;
});

ipcMain.handle('open-directory', async (e) => {
  const window = BrowserWindow.fromWebContents(e.sender);
  if (!window) return { canceled: true, filePaths: [] };

  const result = await dialog.showOpenDialog(window, {
    properties: ['openDirectory']
  });

  return result;
});
