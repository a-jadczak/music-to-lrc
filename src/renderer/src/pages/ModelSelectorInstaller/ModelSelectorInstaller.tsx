import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel/LinearProgressWithLabel';
import { SelectChangeEvent } from '@mui/material';
import StepperContext from '@renderer/contexts/StepperContext';
import { isEmpty } from '@renderer/utils/stringUtils';
import { Label } from '@mui/icons-material';

const ModelSelectorInstaller = (): React.JSX.Element => {
  const { setNextStepAvalible } = useContext(StepperContext)!;

  const [isInstalling, setIsInstalling] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  useEffect(() => {
    setNextStepAvalible(!isEmpty(selectedModel) && !isInstalling);
  }, [selectedModel, isInstalling]);

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
        <Select
          onChange={(e: SelectChangeEvent<string>) => {
            setSelectedModel(e.target.value);
          }}
          labelId="model-label"
          label="Model"
          disabled={isInstalling}
        >
          <MenuItem value={'small'}>small</MenuItem>
          <MenuItem value={'medium'}>medium</MenuItem>
          <MenuItem value={'large'}>large</MenuItem>
        </Select>
      </FormControl>

      {selectedModel && (
        <>
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
              <Button
                onClick={() => setIsInstalling(true)}
                size="small"
                variant="contained"
                color="success"
              >
                Install
              </Button>
            )}
          </Box>

          <Box
            sx={{
              mt: '1em',
              display: 'flex',
              width: '100%',
              justifyContent: 'end',
              alignItems: 'center',
              gap: 1.5
            }}
          >
            <Box sx={{ flex: 2 }}>
              <Typography component={'h3'} variant="h5">
                Translation settings
              </Typography>
            </Box>
            <FormControl sx={{ flex: 1 }}>
              <InputLabel id="device-label" size="small">
                Device
              </InputLabel>
              <Select
                onChange={(e: SelectChangeEvent<string>) => {
                  //setSelectedModel(e.target.value);
                }}
                labelId="device-label"
                label="Device"
                size="small"
              >
                <MenuItem value={'cpu'}>CPU</MenuItem>
                <MenuItem value={'cuda'}>GPU (CUDA)</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <InputLabel id="language-label" size="small">
                Languages
              </InputLabel>
              <Select
                onChange={(e: SelectChangeEvent<string>) => {
                  //setSelectedModel(e.target.value);
                }}
                labelId="language-label"
                label="Language"
                size="small"
              >
                <MenuItem value={'auto'}>Auto</MenuItem>
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'pl'}>Polish</MenuItem>
                <MenuItem value={'ge'}>Germany</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl sx={{ display: 'flex', marginTop: '1em', width: '100%' }}>
            <Typography component={'span'}>Beam size</Typography>
            <Slider
              aria-label="Beam size"
              defaultValue={3}
              valueLabelDisplay="auto"
              marks
              min={1}
              max={10}
            />
          </FormControl>
        </>
      )}
    </>
  );
};

export default ModelSelectorInstaller;
