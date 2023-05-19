import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const SemiExp = () => {
  return (
    <Grid
       paddingY={1.5}
       sx={{ 
        backgroundColor: 'green',
        textShadow: '0 0 5px',
        position: 'relative',
        "&::after": {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'block',
          background: 'radial-gradient(transparent 0 2px, rgba(0, 0, 0, .3) 2px)',
          backgroundSize: '5px 5px',
          content: '""',
        }
      }}
    >
      <Typography 
        color='white'
        lineHeight={1} 
        fontSize={72}
        width='140%'
        sx={{ 
          transform:'scale(0.7, 1.0)', 
          transformOrigin: 'left'
        }}
      >
        区間急行
      </Typography>
    </Grid>
  )
}

export default SemiExp;