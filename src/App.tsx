import React from 'react';
import Box from '@mui/material/Box';
import StationHome from './components/parts/StationHome';
import TrainInformation from './components/parts/TrainInformation';

function App() {
  return (
    <Box 
      marginX={2}
      sx={{
        maxWidth: '1080px',
      }}
    >
      <StationHome />
      <TrainInformation />
    </Box>
  );
}

export default App;
