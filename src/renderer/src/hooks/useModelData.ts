import ModelData from '@renderer/types/ModelData';
import { useEffect, useState } from 'react';

const useModelData = () => {
  const [modelsData, setModelsData] = useState<ModelData[]>();
  const [selectedModel, setSelectedModel] = useState<ModelData | null>();

  const [isInstalling, setIsInstalling] = useState<boolean>(false);
  const [isModelInstalled, setIsModelInstalled] = useState<boolean>();

  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  useEffect(() => {
    window.api
      .getModels()
      .then((models) => {
        setModelsData(models);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  const setModel = (modelName: string) => {
    setSelectedModel(modelsData?.find((model) => model.name === modelName));

    window.api.getIsModelInstalled(modelName).then((value) => setIsModelInstalled(value));
  };

  const installModel = () => {
    setIsInstalling(true);
    window.ws.connect(`ws://localhost:8000/ws/download/${selectedModel?.name}`);

    window.ws.onMessage((data: string) => {
      const parsed = JSON.parse(data);
      if (parsed.status === 'progress') {
        console.log(parsed);
        setDownloadProgress(parsed.percent);
      } else if (parsed.status === 'complete') {
        console.log('process completed');
        setIsInstalling(false);
        setIsModelInstalled(true);
      }
    });

    window.ws.onStatus((status) => console.log('WS Status:', status));
    window.ws.onError((err) => console.error('WS Error:', err));
  };

  return {
    modelsData,
    isModelInstalled,
    isInstalling,
    downloadProgress,
    setModel,
    selectedModel,
    installModel
  };
};

export default useModelData;
