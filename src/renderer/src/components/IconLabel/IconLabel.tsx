import { Box, Typography } from '@mui/material';
import { JSX } from 'react';

const IconLabel = ({
  text,
  children: icon
}: {
  text: string;
  children: JSX.Element;
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {icon}
      <Typography component="span">{text}</Typography>
    </Box>
  );
};

export default IconLabel;
