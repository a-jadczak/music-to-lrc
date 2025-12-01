interface TranscribeSettings {
  device: 'cpu' | 'cuda';
  model: string;
  languageISO: string;
  beamSize: number;
}

export default TranscribeSettings;
