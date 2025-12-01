import { registerFileDialogHandlers } from './fileDialog';
import { registerAPIHandlers } from './api/endpoints/transcribeSettings';
import { registerModelAPIHandlers } from './api/endpoints/modelSettings';

export const registerIPCHandlers = () => {
  registerFileDialogHandlers();
  registerAPIHandlers();
  registerModelAPIHandlers();
};
