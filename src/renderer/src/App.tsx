import { useState } from 'react';
import Stepper from './components/Stepper/Stepper';

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <div style={{ height: '90vh' }}>
      <Stepper children={undefined} />
    </div>
  );
}

export default App;
