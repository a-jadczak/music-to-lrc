import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const CompletionPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
      }}
    >
      <TaskAltIcon color="success" fontSize="large" sx={{ fontSize: '6em' }} />
      <Typography component="h2" variant="h4">
        Done!
      </Typography>
      <Typography
        component="p"
        sx={{ color: 'text.secondary', textAlign: 'center' }}
      >
        The translation of the songs has been completed.
      </Typography>
      <Button variant="contained" sx={{ mt: 1 }}>
        Start over
      </Button>
    </Box>
  );
};

export default CompletionPage;
