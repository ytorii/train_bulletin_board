import React from 'react';
import Typography from '@mui/material/Typography';

const TrainOrder = ({order}: {order: string} ) => {
  return (
    <Typography 
      sx={{ 
        backgroundColor: '#131929',
        textShadow: '0 0 5px',
        position: 'relative',
        "&::before": {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'block',
          backgroundImage: 'radial-gradient(transparent 0 1px, rgba(0, 0, 0, 0.8) 1px)',
          backgroundSize: '5px 5px',
          content: '""',
        }
      }}
      color={'orange'}
      marginX={5}
      paddingY={1.5}
      lineHeight={1} 
      fontSize={72}
    >
      {order}
    </Typography>
  )
};

export default TrainOrder;