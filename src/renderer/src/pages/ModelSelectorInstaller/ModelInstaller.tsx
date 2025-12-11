import { Box, Button, Typography } from '@mui/material';
import LinearProgressWithLabel from '@renderer/components/LinearProgressWithLabel/LinearProgressWithLabel';
import { useEffect } from 'react';

interface ModelInstallerProps {
  weight: number | undefined;
  isInstalling: boolean;
  downloadProgress: number;
  installModel: () => void;
}

const ModelInstaller = ({
  weight,
  downloadProgress,
  isInstalling,
  installModel
}: ModelInstallerProps) => {
  useEffect(() => {
    if (isInstalling) console.log(isInstalling);
    else console.log('jakis blad');
  }, [isInstalling]);

  console.log('Czy się instaulje?', isInstalling);

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
          <LinearProgressWithLabel value={downloadProgress} />
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
