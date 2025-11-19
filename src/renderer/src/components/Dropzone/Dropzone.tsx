import './Dropzone.css';
import Upload from '@mui/icons-material/Upload';
import { Box, Typography } from '@mui/material';

const Dropzone = () => {
  const uploadFiles = async () => {
    const files = await window.electronAPI.uploadFiles();

    console.log(files);
  };

  return (
    <Box className="dropzone-container" onClick={uploadFiles}>
      <Box
        className="dropzone"
        sx={{
          color: 'text.secondary',
          borderColor: 'text.secondary',
          '&:hover': {
            bgcolor: 'primary.light',
            color: 'white',
            borderColor: 'white'
          }
        }}
      >
        <Upload sx={{ fontSize: '3.5em' }} />
        <Typography component={'span'}>
          Drag and drop files or click here
        </Typography>
      </Box>
    </Box>
  );
};

export default Dropzone;
