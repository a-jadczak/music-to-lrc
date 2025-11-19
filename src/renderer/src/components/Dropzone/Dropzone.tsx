import './Dropzone.css';
import Upload from '@mui/icons-material/Upload';
import { Box, Typography } from '@mui/material';
import { FilesContext } from '@renderer/contexts/FilesContext';
import { getFileExtension } from '@renderer/utils/stringUtils';
import { useContext, useState } from 'react';
import AudioFile from 'src/types/AudioFile';
import uniqid from 'uniqid';

const Dropzone = () => {
  const { addFiles } = useContext(FilesContext)!;
  const [dragging, setDragging] = useState(false);

  const uploadFiles = async () => {
    const dialogResult = await window.electronAPI.uploadFiles();

    if (dialogResult.canceled) return;

    console.log(dialogResult);
    addFiles(dialogResult.files);
  };

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer?.files || []);
    // For safety purposes, getting a file path is not allowed so we have to create an custom URL to be able to read file
    const newFiles: AudioFile[] = files.map((file) => ({
      id: `file-${uniqid()}`,
      name: file.name,
      size: file.size,
      type: getFileExtension(file.name),
      path: URL.createObjectURL(file)
    }));

    console.log(newFiles);
    addFiles(newFiles);
    handleDragLeave();
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(true);
  }
  const handleDragLeave = () => setDragging(false);

  return (
    <Box className="dropzone-container">
      <Box
        onClick={uploadFiles}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnd={handleDragLeave}
        className={`dropzone ${dragging && 'dragging'}`}
      >
        <Upload sx={{ fontSize: '3.5em' }} />
        <Typography component={'span'}>Drag and drop audio files or click here</Typography>
      </Box>
    </Box>
  );
};

export default Dropzone;
