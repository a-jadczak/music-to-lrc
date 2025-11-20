import { JSX } from 'react';

interface Step {
  name: string;
  component: JSX.Element;
  backButton: boolean;
}

export default Step;
