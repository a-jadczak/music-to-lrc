import { Stepper as StepperMUI, Step as StepMUI, StepLabel, Button, Box } from '@mui/material';
import { JSX, useState } from 'react';
import './Stepper.css';
import Step from 'src/types/Step';

const Stepper = ({ steps }: { steps: Step[] }): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box className="stepper-container">
      <StepperMUI className="stepper-steps" activeStep={activeStep}>
        {steps.map((step) => (
          <StepMUI key={step.name}>
            <StepLabel>{step.name}</StepLabel>
          </StepMUI>
        ))}
      </StepperMUI>

      <Box className="stepper-children">{steps[activeStep].component}</Box>

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
