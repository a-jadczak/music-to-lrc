import { useState } from 'react';
import Stepper from './components/Stepper/Stepper';
import { ThemeProvider } from '@mui/material/styles';
import Dropzone from './components/Dropzone/Dropzone';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import FileTreeConfigurator from './pages/FileTreeConfigurator/FileTreeConfigurator';
import ModelSelectorInstaller from './pages/ModelSelectorInstaller/ModelSelectorInstaller';
import TranslationProgress from './pages/TranslationProgress/TranslationProgress';
import CompletionPage from './pages/CompletionPage/CompletionPage';

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Stepper>
          {/* <Dropzone /> */}
          {/* <FileTreeConfigurator /> */}
          {/* <ModelSelectorInstaller /> */}
          {/* <TranslationProgress /> */}
          <CompletionPage />
        </Stepper>
      </main>
    </ThemeProvider>
  );
}

export default App;
