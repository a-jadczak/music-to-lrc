import { useEffect, useState } from 'react';
import Language from 'src/types/Language';

const useLanguages = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    window.electronAPI
      .getLanguages()
      .then((res) => {
        setLanguages(res);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  return languages;
};

export default useLanguages;
