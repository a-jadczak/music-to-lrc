import { Alert, Box, Chip } from '@mui/material';
import Dropzone from '@renderer/components/Dropzone/Dropzone';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import { useContext } from 'react';
import { FilesContext } from '@renderer/contexts/FilesContext';

const UploadPage = () => {
  const { files, deleteFile } = useContext(FilesContext)!;

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
            key={file.path}
            icon={<AudioFileIcon />}
            onDelete={() => deleteFile(file)}
            label={file.name}
          />
        ))}
      </Box>
      <Alert severity="error" sx={{ mt: 2 }}>
        This is an error Alert.
      </Alert>
    </>
  );
};

export default UploadPage;
