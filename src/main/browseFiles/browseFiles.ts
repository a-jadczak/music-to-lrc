import { BrowserWindow, dialog, ipcMain } from 'electron';
import fs from 'fs';
import path from 'path';

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

  if (result.canceled) return { canceled: true, files: [] };

  const files = result.filePaths.map((filePath) => ({
    name: path.basename(filePath),
    path: filePath,
    size: fs.statSync(filePath).size,
    type: path.extname(filePath).slice(1)
  }));

  return { canceled: false, files };
});

ipcMain.handle('open-directory', async (e) => {
  const window = BrowserWindow.fromWebContents(e.sender);
  if (!window) return { canceled: true, filePaths: [] };

  const result = await dialog.showOpenDialog(window, {
    properties: ['openDirectory']
  });

  return result;
});
