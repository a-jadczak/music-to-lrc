import { Box, Chip } from '@mui/material';
import Dropzone from '@renderer/components/Dropzone/Dropzone';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import { useEffect } from 'react';

const UploadPage = () => {
  return (
    <>
      <Dropzone />
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 1
        }}
      >
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
        <Chip icon={<AudioFileIcon />} label="With Icon" />
      </Box>
    </>
  );
};

export default UploadPage;
