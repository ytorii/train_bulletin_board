import React from 'react';
import Typography from '@mui/material/Typography';

const Exp = () => {
  return (
    <Typography 
      letterSpacing={'0.2em'} 
      sx={{ 
        backgroundColor: 'red',
        transform: 'scale(1.1, 1.0)',
        transformOrigin: 'top left',
        width: '84%',
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
      color='white'
      paddingY={1.5}
      pl={2}
      lineHeight={1} 
      fontSize={72}
    >
     特急 
    </Typography>
  )
}

export default Exp;