import { BrowserWindow, dialog, ipcMain } from 'electron';
import fs from 'fs';
import path from 'path';
import uniqid from 'uniqid';
import AudioFile from '../../types/AudioFile';

export const registerFileDialogHandlers = () => {
  ipcMain.handle('fileDialog:pickFiles', async (e) => {
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

    const files: AudioFile[] = result.filePaths.map((filePath) => ({
      id: `file-${uniqid()}`,
      name: path.basename(filePath),
      size: fs.statSync(filePath).size,
      type: path.extname(filePath).slice(1),
      path: filePath
    }));

    return { canceled: false, files };
  });

  ipcMain.handle('fileDialog:pickDirectory', async (e) => {
    const window = BrowserWindow.fromWebContents(e.sender);
    if (!window) return { canceled: true, filePaths: [] };

    const result = await dialog.showOpenDialog(window, {
      properties: ['openDirectory']
    });

    return result;
  });
};
