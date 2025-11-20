import Stepper from './components/Stepper/Stepper';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import FileTreeConfigurator from './pages/FileTreeConfigurator/FileTreeConfigurator';
import ModelSelectorInstaller from './pages/ModelSelectorInstaller/ModelSelectorInstaller';
import TranslationProgress from './pages/TranslationProgress/TranslationProgress';
import CompletionPage from './pages/CompletionPage/CompletionPage';
import UploadPage from './pages/UploadPage/UploadPage';
import { FilesProvider } from './contexts/FilesContext';
import Step from 'src/types/Step';

function App(): React.JSX.Element {
  const steps: Step[] = [
    { name: 'Upload', component: <UploadPage /> },
    { name: 'Output', component: <FileTreeConfigurator /> },
    { name: 'Model', component: <ModelSelectorInstaller /> },
    { name: 'Translation', component: <TranslationProgress /> },
    { name: 'Finish', component: <CompletionPage /> }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <FilesProvider>
          <Stepper steps={steps} />
        </FilesProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
