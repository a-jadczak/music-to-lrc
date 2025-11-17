import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import FileBranch from './FileBranch';
import DescriptionIcon from '@mui/icons-material/Description';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import './FileTreeConfigurator.css';
import { useState } from 'react';
import { FILE } from 'dns';

const FileTreeConfigurator = () => {
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

  return (
    <>
      <h2>Output Settings:</h2>
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

        <div className="input-group">
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
            />
          </Box>
          <input
            className="path-input"
            type="text"
            placeholder="Enter destination path"
          />
        </div>
        <div className="file-tree-result">
          {arr.map((e) => {
            return (
              <>
                {placeInFolders && (
                  <FileBranch text={'Folder'} children={<FolderIcon />} />
                )}
                <div className={`${placeInFolders && 'folder'}`}>
                  <FileBranch
                    text={`${e}.lrc`}
                    children={<DescriptionIcon />}
                  />
                  {includeSourceFiles && (
                    <FileBranch
                      text={`${e}.mp3`}
                      children={<AudioFileIcon />}
                    />
                  )}
                </div>
              </>
            );
          })}
        </div>
      </FormGroup>
    </>
  );
};

export default FileTreeConfigurator;
