import { registerFileHandlers } from './browseFiles';
import { registerAPIHandlers } from './api/endpoints/languages';

export const registerIPCHandlers = () => {
  registerFileHandlers();
  registerAPIHandlers();
};
