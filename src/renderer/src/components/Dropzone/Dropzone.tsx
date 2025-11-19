import './Dropzone.css';
import Upload from '@mui/icons-material/Upload';
import { Box, Typography } from '@mui/material';
import { FilesContext } from '@renderer/contexts/FilesContext';
import { useContext } from 'react';

const Dropzone = () => {
  const { setFiles } = useContext(FilesContext)!;

  const uploadFiles = async () => {
    const dialogResult = await window.electronAPI.uploadFiles();

    if (dialogResult.canceled) return;

    console.log(dialogResult.filePaths);
    setFiles(dialogResult.filePaths);
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
