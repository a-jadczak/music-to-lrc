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
import { useState } from 'react';

const FileTreeConfigurator = () => {
  const [path, setPath] = useState('');

  const [placeInFolders, setPlaceInFolders] = useState(true);
  const [includeSourceFiles, setIncludeSourceFiles] = useState(true);

  const [arr, setArr] = useState([
    'John',
    'John 1',
    'John 2',
    'John 3',
    'John 4',
    'John 5'
  ]);

  const setDirectory = async () => {
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
              onClick={setDirectory}
            />
          </Box>
          <input
            className="path-input"
            value={path}
            type="text"
            placeholder="Enter destination path"
          />
        </Box>
        <Box className="file-tree-result">
          {arr.map((e) => {
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
