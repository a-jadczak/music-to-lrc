import Stepper from './components/Stepper/Stepper';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { FilesProvider } from './contexts/FilesContext';
import theme from './theme/theme';
import { steps } from './constants/step';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FilesProvider>
        <main>
          <Stepper steps={steps} />
        </main>
      </FilesProvider>
    </ThemeProvider>
  );
}

export default App;
