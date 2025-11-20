import { createContext } from 'react';

interface StepperContextType {
  nextStepAvalible: boolean;
  setNextStepAvalible: (value: boolean) => void;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export default StepperContext;
