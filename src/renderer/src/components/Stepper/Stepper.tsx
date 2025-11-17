import {
  Stepper as StepperMUI,
  Step,
  StepLabel,
  Button,
  Box
} from '@mui/material';
import { JSX, useState } from 'react';
import './Stepper.css';

const Stepper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Choose Files', 'Output', 'Finish'];

  return (
    <Box className="stepper-container">
      <StepperMUI className="stepper-steps" activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StepperMUI>

      <Box className="stepper-children">{children}</Box>

      <Box className="stepper-buttons">
        <Button
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prev) => prev - 1)}
          variant="contained"
        >
          Back
        </Button>
        <Button
          disabled={activeStep === steps.length - 1}
          onClick={() => setActiveStep((prev) => prev + 1)}
          variant="contained"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Stepper;
