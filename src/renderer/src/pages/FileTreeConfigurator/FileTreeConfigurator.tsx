import { Box, Typography } from '@mui/material';
import './FileTreeConfigurator.css';
import { useContext, useEffect, useState } from 'react';
import { FilesContext } from '@renderer/contexts/FilesContext';
import { isEmpty } from '@renderer/utils/stringUtils';
import StepperContext from '@renderer/contexts/StepperContext';
import DirectoryInput from './DirectoryInput';
import FileItem from './FileItem';
import OutputOptions from './OutputOptions';

const FileTreeConfigurator = () => {
  const { files, outputPath, setOutputPath } = useContext(FilesContext)!;
  const { setNextStepAvalible } = useContext(StepperContext)!;

  const [placeInFolders, setPlaceInFolders] = useState(true);
  const [includeSourceFiles, setIncludeSourceFiles] = useState(true);

  const setSelectedPath = async () => {
    const dir = await window.electronAPI.openDirectory();

    if (dir.canceled) return;

    setOutputPath(dir.filePaths[0]);
    setNextStepAvalible(!isEmpty(dir.filePaths[0]));
  };

  useEffect(() => {
    setNextStepAvalible(!isEmpty(outputPath));
  }, []);

  return (
    <>
      <Typography component="h2" variant="h4">
        Output Settings
      </Typography>

      <OutputOptions
        placeInFolders={placeInFolders}
        setPlaceInFolders={setPlaceInFolders}
        includeSourceFiles={includeSourceFiles}
        setIncludeSourceFiles={setIncludeSourceFiles}
      />

      <DirectoryInput outputPath={outputPath} onSelect={setSelectedPath} />

      <Box className="file-tree-result">
        {files.map((file) => (
          <FileItem
            file={file}
            placeInFolders={placeInFolders}
            includeSourceFiles={includeSourceFiles}
          />
        ))}
      </Box>
    </>
  );
};

export default FileTreeConfigurator;
