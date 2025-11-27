import AudioFile from './../types/AudioFile';
import Language from 'src/types/Language';

declare global {
  interface Window {
    api: typeof import('./preload/index').api;
  }
}
