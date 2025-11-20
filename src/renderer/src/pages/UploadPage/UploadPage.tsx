import { Box, Chip } from '@mui/material';
import Dropzone from '@renderer/components/Dropzone/Dropzone';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import { useContext, useEffect } from 'react';
import { FilesContext } from '@renderer/contexts/FilesContext';
import StepperContext from '@renderer/contexts/StepperContext';

const UploadPage = () => {
  const { files, deleteFile } = useContext(FilesContext)!;
  const { setNextStepAvalible } = useContext(StepperContext)!;

  useEffect(() => {
    setNextStepAvalible(files.length >= 1);
  }, [files]);

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
        {files.map((file) => (
          <Chip
            key={file.id}
            icon={<AudioFileIcon />}
            onDelete={() => deleteFile(file)}
            label={file.name}
          />
        ))}
      </Box>
    </>
  );
};

export default UploadPage;
