import { useContext, useEffect } from 'react';
import StepperContext from '@renderer/contexts/StepperContext';
import useTranscribeSettings from '@renderer/hooks/useTranscribeSettings';
import useModelData from '@renderer/hooks/useModelData';
import ModelSelect from './components/ModelSelect';
import ModelInstaller from './components/ModelInstaller';
import ModelSettings from './components/ModelSettings';

const ModelSelectorInstaller = (): React.JSX.Element => {
  const { setNextStepAvalible } = useContext(StepperContext)!;

  const { transcribeSettings, languages, isCudaAvailable, setTranscribeSettings } =
    useTranscribeSettings();
  const {
    selectedModel,
    modelsData,
    installModel,
    downloadProgress,
    isInstalling,
    isModelInstalled,
    setModel
  } = useModelData();

  useEffect(() => {
    setNextStepAvalible(selectedModel != null && !isInstalling);
  }, [selectedModel, isInstalling]);

  return (
    <>
      <ModelSelect modelsData={modelsData} setModel={setModel} isInstalling={isInstalling} />

      {selectedModel &&
        (isModelInstalled ? (
          <ModelSettings isCudaAvailable={isCudaAvailable} languages={languages} />
        ) : (
          <ModelInstaller
            weight={`${selectedModel.weight} ${selectedModel.unit}`}
            isInstalling={isInstalling}
            installModel={installModel}
            downloadProgress={downloadProgress}
          />
        ))}
    </>
  );
};

export default ModelSelectorInstaller;
