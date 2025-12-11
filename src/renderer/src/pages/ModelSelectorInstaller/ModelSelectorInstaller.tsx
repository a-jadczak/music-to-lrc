import { useContext, useEffect } from 'react';
import StepperContext from '@renderer/contexts/StepperContext';
import { isEmpty } from '@renderer/utils/stringUtils';
import useTranscribeSettings from '@renderer/hooks/useTranscribeSettings';
import useModelData from '@renderer/hooks/useModelData';
import ModelSelect from './ModelSelect';
import ModelInstaller from './ModelInstaller';
import ModelSettings from './ModelSettings';

const ModelSelectorInstaller = (): React.JSX.Element => {
  const { setNextStepAvalible } = useContext(StepperContext)!;

  const { transcribeSettings, languages, isCudaAvailable, setTranscribeSettings } =
    useTranscribeSettings();
  const {
    models,
    installModel,
    downloadProgress,
    isInstalling,
    weight,
    isModelInstalled,
    selectedModel,
    setModel
  } = useModelData();

  useEffect(() => {
    setNextStepAvalible(!isEmpty(selectedModel) && !isInstalling);
  }, [selectedModel, isInstalling]);

  return (
    <>
      <ModelSelect models={models} setModel={setModel} isInstalling={isInstalling} />

      {selectedModel &&
        (isModelInstalled ? (
          <ModelSettings isCudaAvailable={isCudaAvailable} languages={languages} />
        ) : (
          <ModelInstaller
            weight={weight}
            isInstalling={isInstalling}
            installModel={installModel}
            downloadProgress={downloadProgress}
          />
        ))}
    </>
  );
};

export default ModelSelectorInstaller;
