import { Box, Chip } from '@mui/material';
import Dropzone from '@renderer/components/Dropzone/Dropzone';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import { useContext } from 'react';
import { FilesContext } from '@renderer/contexts/FilesContext';

const UploadPage = () => {
  const { getFileNames } = useContext(FilesContext)!;

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
        {getFileNames().map((e) => (
          <Chip icon={<AudioFileIcon />} label={e} />
        ))}
      </Box>
    </>
  );
};

export default UploadPage;
