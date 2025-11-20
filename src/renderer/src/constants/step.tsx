import FileTreeConfigurator from '../pages/FileTreeConfigurator/FileTreeConfigurator';
import ModelSelectorInstaller from '../pages/ModelSelectorInstaller/ModelSelectorInstaller';
import TranslationProgress from '../pages/TranslationProgress/TranslationProgress';
import CompletionPage from '@renderer/pages/CompletionPage/CompletionPage';
import UploadPage from '@renderer/pages/UploadPage/UploadPage';
import Step from 'src/types/Step';

export const steps: Step[] = [
  {
    name: 'Upload',
    component: <UploadPage />,
    backButton: true
  },
  {
    name: 'Output',
    component: <FileTreeConfigurator />,
    backButton: true
  },
  {
    name: 'Model',
    component: <ModelSelectorInstaller />,
    backButton: true
  },
  {
    name: 'Translation',
    component: <TranslationProgress />,
    backButton: false
  },
  {
    name: 'Finish',
    component: <CompletionPage />,
    backButton: false
  }
];
