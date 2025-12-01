import { useEffect, useState } from 'react';

const useModelData = () => {
  const [models, setModels] = useState<string[]>();
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [isInstalling, setIsInstalling] = useState<boolean>(false);

  const [weight, setWeight] = useState<number>();
  const [isModelInstalled, setIsModelInstalled] = useState<boolean>();

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

  // Pseudo code
  const installModel = () => {
    setIsInstalling(true);
    setTimeout(() => {
      setIsInstalling(false);
      setIsModelInstalled(true);
    }, 2000);
  };

  return { models, weight, isModelInstalled, isInstalling, setModel, selectedModel, installModel };
};

export default useModelData;
