import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import './FileTreeConfigurator.css';
import { useState } from 'react';

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
            <FolderIcon
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
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <FolderIcon />
                    <span>Folder</span>
                  </Box>
                )}
                <div className={`${placeInFolders && 'folder'}`}>
                  <div>{e}</div>
                  {includeSourceFiles && <div>S-{e}</div>}
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
