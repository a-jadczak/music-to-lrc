import { useEffect, useState } from 'react';

const useModelData = () => {
  const [weight, setWeight] = useState<number>();
  const [models, setModels] = useState<string[]>();
  const [isModelInstalled, setIsModelInstalled] = useState<boolean>();

  useEffect(() => {
    window.api
      .getModels()
      .then((models) => {
        setModels(models);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  return { weight, models, isModelInstalled };
};

export default useModelData;
