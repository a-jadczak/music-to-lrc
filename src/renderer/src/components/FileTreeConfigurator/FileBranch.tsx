import { Box } from '@mui/material';
import { JSX } from 'react';

const FileBranch = ({
  text,
  children
}: {
  text: string;
  children: JSX.Element;
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      {children}
      <span>{text}</span>
    </Box>
  );
};

export default FileBranch;
