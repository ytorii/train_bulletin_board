import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const RapidLimitedExp = () => {
  return (
    <Grid
       display='flex'
       sx={{ 
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
      <Grid 
        item xs={8}
        pt={1}
        pb={2.1}
        sx={{ backgroundColor: 'deeppink' }} 
      >
        <Typography 
          color='white'
          lineHeight={1} 
          fontSize={72}
          width='200%'
          sx={{ 
            transform:'scale(0.5, 1.2)', 
            transformOrigin: 'top left'
          }}
        >
          快速特急
        </Typography>
      </Grid>
      <Grid 
        item xs={4}
        pt={1}
        pb={2.1}
        sx={{ backgroundColor: 'white' }} 
      >
        <Typography 
          color='deeppink'
          lineHeight={1} 
          fontSize={72}
          width='200%'
          sx={{ 
            transform:'scale(0.5, 1.2)', 
            transformOrigin: 'top left'
          }}
        >
          洛楽
        </Typography>
      </Grid>
    </Grid>
  )
}

export default RapidLimitedExp;