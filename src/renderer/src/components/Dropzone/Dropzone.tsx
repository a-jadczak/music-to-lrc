import React from 'react';
import './Dropzone.css';
import Upload from '@mui/icons-material/Upload';
import { Box } from '@mui/material';

const Dropzone = () => {
  return (
    <div className="dropzone-container">
      <Box
        className="dropzone"
        sx={{
          color: 'grey.700',
          borderColor: 'grey.700',
          '&:hover': {
            bgcolor: 'primary.light',
            color: 'white',
            borderColor: 'white'
          }
        }}
      >
        <Upload sx={{ fontSize: '5em' }} />
        <span>Drag and drop files or click here</span>
      </Box>
    </div>
  );
};

export default Dropzone;
