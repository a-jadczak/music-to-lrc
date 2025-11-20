import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import IconLabel from '../../components/IconLabel/IconLabel';
import DescriptionIcon from '@mui/icons-material/Description';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import './FileTreeConfigurator.css';
import { useContext, useEffect, useState } from 'react';
import { FilesContext } from '@renderer/contexts/FilesContext';
import { isEmpty, splitFileExtension } from '@renderer/utils/stringUtils';
import StepperContext from '@renderer/contexts/StepperContext';

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
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setPlaceInFolders((prev) => (prev = !prev))}
              checked={placeInFolders}
            />
          }
          label="Place in folders"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setIncludeSourceFiles((prev) => (prev = !prev))}
              checked={includeSourceFiles}
            />
          }
          label="Include source files"
        />

        <Box className="input-group">
          <Box
            className="icon"
            sx={{
              '&:hover > *': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <CreateNewFolderIcon
              sx={{ transition: 'transform 0.35s ease' }}
              fontSize="large"
              onClick={setSelectedPath}
            />
          </Box>
          <input
            className="path-input"
            value={outputPath}
            type="text"
            placeholder="C:\Users\Home"
            readOnly={true}
          />
        </Box>
        <Box className="file-tree-result">
          {files.map((file) => {
            return (
              <>
                {placeInFolders && <IconLabel text={'Folder'} children={<FolderIcon />} />}
                <Box className={`${placeInFolders && 'folder'}`}>
                  <IconLabel
                    text={`${splitFileExtension(file.name)}.lrc`}
                    children={<DescriptionIcon />}
                  />
                  {includeSourceFiles && (
                    <IconLabel text={`${file.name}`} children={<AudioFileIcon />} />
                  )}
                </Box>
              </>
            );
          })}
        </Box>
      </FormGroup>
    </>
  );
};

export default FileTreeConfigurator;
