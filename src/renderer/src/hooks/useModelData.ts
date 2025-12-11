import { useEffect, useState } from 'react';

const useModelData = () => {
  const [models, setModels] = useState<string[]>();
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [isInstalling, setIsInstalling] = useState<boolean>(false);

  const [weight, setWeight] = useState<number>();
  const [isModelInstalled, setIsModelInstalled] = useState<boolean>();

  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  useEffect(() => {
    window.api
      .getModels()
      .then((models) => {
        setModels(models);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  const setModel = (modelName: string) => {
    setSelectedModel(modelName);

    window.api.getModelWeight(modelName).then((v) => setWeight(v));
    window.api.getIsModelInstalled(modelName).then((v) => setIsModelInstalled(v));
  };

  const installModel = () => {
    setIsInstalling(true);
    window.ws.connect('ws://localhost:8000/ws/download/tiny');

    window.ws.onMessage((data) => {
      const parsed = JSON.parse(data);
      if (parsed.status === 'progress') {
        console.log(parsed);
        setDownloadProgress(parsed.percent);
      }
      if (parsed.status === 'complete') {
        console.log('process completed');
        setIsInstalling(false);
      }
    });

    window.ws.onStatus((status) => console.log('WS Status:', status));
    window.ws.onError((err) => console.error('WS Error:', err));
  };

  useEffect(() => {
    if (isInstalling) console.log('isInstalling:', isInstalling);
  }, [isInstalling]);

  return {
    models,
    weight,
    isModelInstalled,
    isInstalling,
    downloadProgress,
    setModel,
    selectedModel,
    installModel
  };
};

export default useModelData;
