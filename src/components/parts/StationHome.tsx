import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import logo from '../../logo.svg';

const StationHome = () => {
  return (
    <Box 
    sx={{
        color: 'white',
        backgroundColor: '#011961',
        display: 'flex',
      }}
    >
      <Box ml={3} mr={3}>
        <Typography fontSize={128} lineHeight={1} fontWeight={550}>2</Typography>
      </Box>
      <Box>
        <Box display="flex" alignItems="end" mt={3}>
          <Box>
            <Typography fontSize={54} lineHeight={1} fontWeight={600}>守口市・京橋・淀屋橋・中之島線</Typography>
          </Box>
          <Box ml={2}>
            <Typography fontSize={36} lineHeight={1} fontWeight={600}>方面</Typography>
          </Box>
        </Box>
        <Box mt={1}>
          <Typography fontSize={30} lineHeight={1} fontWeight={600}>
            for Moriguchishi, kyobashi, Yodoyabashi, Nkanoshima Line
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StationHome;