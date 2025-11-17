import {
  Box,
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import LinearProgressWithLabel from './LinearProgressWithLabel';

const ModelSelectorInstaller = () => {
  const [isInstalling, setIsInstalling] = useState(false);

  return (
    <>
      <h2>Select Model:</h2>
      <Typography component="p" sx={{ color: 'text.secondary' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
        facilis eos enim soluta fugiat. Voluptates obcaecati minima
        exercitationem fugit!
      </Typography>
      <FormControl sx={{ marginTop: '1em', width: '100%' }}>
        <InputLabel>Model</InputLabel>
        <Select label="Model">
          <MenuItem value={10}>small</MenuItem>
          <MenuItem value={20}>medium</MenuItem>
          <MenuItem value={30}>large</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ marginTop: '1em' }}>
        <p>
          Model weight:
          <Typography component={'span'} sx={{ color: 'text.secondary' }}>
            &nbsp;2.05 GB
          </Typography>
        </p>
      </Box>
      <Box sx={{ marginTop: '.5em' }}>
        {isInstalling ? (
          <LinearProgressWithLabel value={23} />
        ) : (
          <Button size="small" variant="contained" color="success">
            Install
          </Button>
        )}
      </Box>
    </>
  );
};

export default ModelSelectorInstaller;
