import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Tooltip,
  Typography
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const ModelSettings = ({ isCudaAvailable, languages }) => {
  return (
    <>
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
            <MenuItem disabled={isCudaAvailable} value={'cuda'}>
              GPU (CUDA)
            </MenuItem>
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
            <MenuItem value={'auto'} defaultChecked>
              Auto
            </MenuItem>
            {languages.map((e) => (
              <MenuItem value={Object.keys(e)[0]}>{e[Object.keys(e)[0]]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <FormControl sx={{ display: 'flex', marginTop: '1em', width: '100%' }}>
        <Typography component={'span'} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          Beam size
          <Tooltip
            title={
              'Beam size is the number that tells the model how many words to check. Bigger numbers can give better results but take more time.'
            }
          >
            <InfoIcon fontSize="small" />
          </Tooltip>
        </Typography>
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
  );
};

export default ModelSettings;
