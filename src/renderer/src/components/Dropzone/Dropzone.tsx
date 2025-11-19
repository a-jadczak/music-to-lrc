import './Dropzone.css';
import Upload from '@mui/icons-material/Upload';
import { Box, Typography } from '@mui/material';
import { FilesContext } from '@renderer/contexts/FilesContext';
import { useContext, useState } from 'react';

const Dropzone = () => {
  const { setFiles } = useContext(FilesContext)!;
  const [dragging, setDragging] = useState(false);

  const uploadFiles = async () => {
    const dialogResult = await window.electronAPI.uploadFiles();

    if (dialogResult.canceled) return;

    console.log(dialogResult.filePaths);
    setFiles(dialogResult.filePaths);
  };

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer?.files || []);
    console.log(files);
    handleDragLeave();
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(true);
  }
  const handleDragLeave = () => setDragging(false);

  return (
    <Box className="dropzone-container" onClick={uploadFiles}>
      <Box
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnd={handleDragLeave}
        className={`dropzone ${dragging && 'dragging'}`}
      >
        <Upload sx={{ fontSize: '3.5em' }} />
        <Typography component={'span'}>
          Drag and drop audio files or click here
        </Typography>
      </Box>
    </Box>
  );
};

export default Dropzone;
