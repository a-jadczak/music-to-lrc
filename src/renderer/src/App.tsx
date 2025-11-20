import Stepper from './components/Stepper/Stepper';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { FilesProvider } from './contexts/FilesContext';
import theme from './theme/theme';
import FileTreeConfigurator from './pages/FileTreeConfigurator/FileTreeConfigurator';
import ModelSelectorInstaller from './pages/ModelSelectorInstaller/ModelSelectorInstaller';
import TranslationProgress from './pages/TranslationProgress/TranslationProgress';
import CompletionPage from './pages/CompletionPage/CompletionPage';
import UploadPage from './pages/UploadPage/UploadPage';
import Step from 'src/types/Step';

function App(): React.JSX.Element {
  const steps: Step[] = [
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <FilesProvider>
          <Stepper steps={steps}>{steps.map((step) => step.component)}</Stepper>
        </FilesProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
