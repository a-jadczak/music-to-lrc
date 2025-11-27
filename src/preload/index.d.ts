import AudioFile from './../types/AudioFile';
import Language from 'src/types/Language';

declare global {
  interface Window {
    electronAPI: typeof import('./preload/index').electronAPI;
  }
}
