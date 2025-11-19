import {
  Stepper as StepperMUI,
  Step,
  StepLabel,
  Button,
  Box
} from '@mui/material';
import { JSX, ReactNode, useState } from 'react';
import './Stepper.css';

const Stepper = ({ steps }: { steps: Map<string, ReactNode> }): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box className="stepper-container">
      <StepperMUI className="stepper-steps" activeStep={activeStep}>
        {Array.from(steps.keys()).map((key) => (
          <Step key={key}>
            <StepLabel>{key}</StepLabel>
          </Step>
        ))}
      </StepperMUI>

      <Box className="stepper-children">
        {Array.from(steps.values())[activeStep]}
      </Box>

      <Box className="stepper-buttons">
        <Button
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prev) => prev - 1)}
          variant="contained"
        >
          Back
        </Button>
        <Button
          disabled={activeStep === steps.size - 1}
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
