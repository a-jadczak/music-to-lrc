import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import IconLabel from '../../components/IconLabel/IconLabel';
import DescriptionIcon from '@mui/icons-material/Description';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import './FileTreeConfigurator.css';
import { useContext, useState } from 'react';
import { FilesContext } from '@renderer/contexts/FilesContext';

const FileTreeConfigurator = () => {
  const { getFileNames } = useContext(FilesContext)!;
  const [path, setPath] = useState('');

  const [placeInFolders, setPlaceInFolders] = useState(true);
  const [includeSourceFiles, setIncludeSourceFiles] = useState(true);

  const setSelectedPath = async () => {
    const dir = await window.electronAPI.openDirectory();
    console.log(dir);
    if (dir.canceled) return;

    setPath(dir.filePaths[0]);
  };

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
            value={path}
            type="text"
            placeholder="C:\Users\Home"
            readOnly={true}
          />
        </Box>
        <Box className="file-tree-result">
          {getFileNames().map((e) => {
            return (
              <>
                {placeInFolders && (
                  <IconLabel text={'Folder'} children={<FolderIcon />} />
                )}
                <Box className={`${placeInFolders && 'folder'}`}>
                  <IconLabel text={`${e}.lrc`} children={<DescriptionIcon />} />
                  {includeSourceFiles && (
                    <IconLabel text={`${e}.mp3`} children={<AudioFileIcon />} />
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
