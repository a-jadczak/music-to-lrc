import { createContext } from 'react';

interface StepperContextType {
  setActiveStep: (value: number) => void;
  setNextStepAvalible: (value: boolean) => void;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export default StepperContext;
