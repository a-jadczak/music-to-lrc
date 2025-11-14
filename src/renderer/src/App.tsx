import { useState } from 'react';
import Stepper from './components/Stepper/Stepper';
import { ThemeProvider } from '@mui/material/styles';
import Dropzone from './components/Dropzone/Dropzone';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import FileTreeConfigurator from './components/FileTreeConfigurator/FileTreeConfigurator';

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Stepper>
          {/* <Dropzone /> */}
          <FileTreeConfigurator />
        </Stepper>
      </main>
    </ThemeProvider>
  );
}

export default App;
