import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel/LinearProgressWithLabel';

const ModelSelectorInstaller = () => {
  const [isInstalling, setIsInstalling] = useState(false);

  return (
    <>
      <Typography component="h2" variant="h4">
        Select Model
      </Typography>
      <Typography component="p" sx={{ color: 'text.secondary' }}>
        A larger model size usually means that the translation will take more time to complete.
        However, the benefit is that the results are generally more accurate. Bigger models can
        analyze more details and understand the context better, which leads to higher-quality
        translations.
      </Typography>
      <FormControl sx={{ marginTop: '1em', width: '100%' }}>
        <InputLabel id="model-label">Model</InputLabel>
        <Select labelId="model-label" label="Model">
          <MenuItem value={1}>small</MenuItem>
          <MenuItem value={2}>medium</MenuItem>
          <MenuItem value={3}>large</MenuItem>
        </Select>
      </FormControl>

      <Box component={'p'} sx={{ marginTop: '1em' }}>
        Model weight:{' '}
        <Typography component={'span'} sx={{ color: 'text.secondary' }}>
          2.05 GB
        </Typography>
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
