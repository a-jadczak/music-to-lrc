import { registerFileDialogHandlers } from './fileDialog';
import { registerAPIHandlers } from './api/endpoints/languages';

export const registerIPCHandlers = () => {
  registerFileDialogHandlers();
  registerAPIHandlers();
};
