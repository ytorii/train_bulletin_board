import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DoorType = ({doorNumber}: {doorNumber: number}) => (
  <Grid display='flex'>
    <Typography 
       lineHeight={1} 
       fontSize={82} 
       marginX={0}
       sx={{
         width: '0.8em',
       }}
     >
       {doorNumber}
     </Typography>
     <Typography 
       lineHeight={1} 
       fontSize={56} 
       pt={3}
       sx={{
         transform:'scale(0.7, 0.9)',
         width: '0.8em',
         transformOrigin: 'top left'
       }}
     >
       扉
     </Typography>
  </Grid>
);

const CarNumber = ({carNumber}: {carNumber: number}) => (
  <Grid display='flex'>
    <Typography 
       lineHeight={1} 
       fontSize={82} 
       marginX={0}
       sx={{
         width: '0.8em',
       }}
     >
       {carNumber}
     </Typography>
     <Typography 
       lineHeight={1} 
       fontSize={56} 
       pt={3}
       sx={{
         transform:'scale(0.7, 0.9)',
         width: '0.8em',
         transformOrigin: 'top left'
       }}
     >
       両
     </Typography>
  </Grid>
);

const ReserveType = ({reserveType}: {reserveType: Boolean}) => (
  <Grid>
    <Typography 
      lineHeight={1} 
      fontSize={36} 
      marginX={0}
    >
      { reserveType ?  '全車' : '一部' }
    </Typography>
    <Typography 
      lineHeight={1} 
      fontSize={36} 
    >
      指定 
    </Typography>
  </Grid>
)

const TrainDestination = ({
  destination, 
  prefix,
  cars, 
  doors, 
  displayPattern, 
}: {
  destination: string;
  prefix?: string,
  cars: number; 
  doors: number;
  displayPattern: number[]; 
}) => {
  const [tern, setTern] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setTern((tern + 1) %  displayPattern.length)
    }, 2000);
  }, [tern, displayPattern.length ])

  return (
    <Grid display='flex'
      sx={{ 
        backgroundColor: '#131929',
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
          background: 'radial-gradient(transparent 0 2px, rgba(0, 0, 0, .5) 2px)',
          backgroundSize: '5px 5px',
          content: '""',
        }
      }}
      color='white'
      alignItems="center"
    >
      <Grid display='flex' item xs={9}>
        { prefix &&
          <Typography 
            sx={{
              textAlignLast: 'justify',
            }}
            lineHeight={1} 
            paddingY={1.5}
            paddingX={3}
            fontSize={48}
          >
            { prefix }
          </Typography>
        }
        <Typography 
          sx={{
            textAlignLast: 'justify',
          }}
          lineHeight={1} 
          paddingY={1.5}
          paddingX={3}
          fontSize={72}
        >
          { destination }
        </Typography>
      </Grid>
      <Grid item xs={3}>
        {(displayPattern[tern] === 0) && <CarNumber carNumber={cars} /> }
        {(displayPattern[tern] === 1) && <DoorType doorNumber={doors} /> }
        {(displayPattern[tern] === 2) && <ReserveType reserveType={false} /> }
        {(displayPattern[tern] === 3) && <ReserveType reserveType /> }
      </Grid>
    </Grid>
  )
};

export default TrainDestination;