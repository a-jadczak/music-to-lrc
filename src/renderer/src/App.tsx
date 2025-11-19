import { useState } from 'react';
import Stepper from './components/Stepper/Stepper';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import FileTreeConfigurator from './pages/FileTreeConfigurator/FileTreeConfigurator';
import ModelSelectorInstaller from './pages/ModelSelectorInstaller/ModelSelectorInstaller';
import TranslationProgress from './pages/TranslationProgress/TranslationProgress';
import CompletionPage from './pages/CompletionPage/CompletionPage';
import UploadPage from './pages/UploadPage/UploadPage';

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
  const steps = new Map<string, React.ReactNode>([
    ['Upload', <UploadPage />],
    ['Output', <FileTreeConfigurator />],
    ['Model', <ModelSelectorInstaller />],
    ['Translation', <TranslationProgress />],
    ['Finish', <CompletionPage />]
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Stepper steps={steps} />
      </main>
    </ThemeProvider>
  );
}

export default App;
