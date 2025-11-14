import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import './FileTreeConfigurator.css';

const FileTreeConfigurator = () => {
  return (
    <>
      <h2>Select:</h2>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Place in folders" />
        <FormControlLabel control={<Checkbox />} label="Include source files" />

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
          <input className="path-input" type="text" placeholder="Path" />
        </div>
        <div className="file-tree-result">blabla</div>
      </FormGroup>
    </>
  );
};

export default FileTreeConfigurator;
