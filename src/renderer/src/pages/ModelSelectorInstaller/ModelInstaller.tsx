import { Box, Button, Typography } from '@mui/material';
import LinearProgressWithLabel from '@renderer/components/LinearProgressWithLabel/LinearProgressWithLabel';

interface ModelInstallerProps {
  weight: number | undefined;
  isInstalling: boolean;
  installModel: () => void;
}

const ModelInstaller = ({ weight, isInstalling, installModel }: ModelInstallerProps) => {
  return (
    <>
      <Box component={'p'} sx={{ marginTop: '1em' }}>
        Model weight:{' '}
        <Typography component={'span'} sx={{ color: 'text.secondary' }}>
          {weight}
        </Typography>
      </Box>
      <Box sx={{ marginTop: '.5em' }}>
        {isInstalling ? (
          <LinearProgressWithLabel value={23} />
        ) : (
          <Button onClick={installModel} size="small" variant="contained" color="success">
            Install
          </Button>
        )}
      </Box>
    </>
  );
};

export default ModelInstaller;
