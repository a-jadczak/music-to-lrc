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
      <TaskAltIcon color="success" fontSize="large" sx={{ fontSize: '8em' }} />
      <Typography component="h2" variant="h3">
        Done!
      </Typography>
      <Typography
        component="p"
        sx={{ color: 'text.secondary', textAlign: 'center' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum
        quod, sunt delectus culpa consectetur aperiam ex aliquam quam obcaecati!
      </Typography>
      <Button variant="contained" sx={{ mt: '2em' }}>
        Start over
      </Button>
    </Box>
  );
};

export default CompletionPage;
