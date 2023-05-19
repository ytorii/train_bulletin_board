import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { loopAnimation } from './styles';

const StopAt = ({stopStations}: {stopStations: string[]}) => (
  <Grid item xs={12} display='flex'>
    <Grid item xs={2.5} ml={1} mt={0.5}>
      <Typography 
        lineHeight={1.1} 
        fontSize={45} 
        color={'forestgreen'}
      >
        停車駅：
      </Typography>
    </Grid>
    <Grid item xs={9.5}>
      <Box 
        color={'orangeRed'}
        letterSpacing={'0em'} 
        sx={{
          whiteSpace: 'nowrap',
          overflowX: 'clip',
        }}
      >
        <Typography 
          lineHeight={1.1}
          fontSize={50} 
          className={loopAnimation}
          sx={{
            width: '110%',
            transform: 'scale(0.9, 1.0)',
          }}
        >
          { stopStations.join('･') }
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const Remarks = ({remarks}: {remarks: string[]}) => (
  <Grid item xs={12}>
    <Box 
      color={'orangeRed'}
      letterSpacing={'0em'} 
      sx={{
        whiteSpace: 'nowrap',
        overflowX: 'clip',
      }}
    >
      <Typography 
        lineHeight={1.1}
        fontSize={50} 
        className={loopAnimation}
        sx={{
          width: '110%',
          transform: 'scale(0.9, 1.0)',
        }}
      >
        { remarks.join('　') }
      </Typography>
    </Box>
  </Grid>
);

const TrainInfo = ({information}: {information: string}) => (
  <Grid item xs={12}>
    <Box 
      color={'orangeRed'}
      letterSpacing={'0em'} 
      sx={{
        whiteSpace: 'nowrap',
        overflowX: 'clip',
      }}
    >
      <Typography 
        lineHeight={1.1}
        fontSize={50} 
        sx={{
          width: '84%',
          transform: 'scale(1.1, 1.0)',
          transformOrigin: 'left top',
        }}
      >
        {information}
        
      </Typography>
    </Box>
  </Grid>
);

const InformationBar = () => {
  const infomations = [
      <StopAt stopStations={['寝屋川市', '萱島', '守口市', '京橋', '天満橋', '北浜']} />,
      <Remarks remarks={['萱島にはこの電車が先着', '京橋で中之島行きの普通電車に連絡']} />,
      <TrainInfo information={'３扉　乗車位置 黄･緑◯２〜◯８'} />
  ]

  const [tern, setTern] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTern((tern + 1) % infomations.length)
    }, 8000);
  }, [tern, infomations.length]);

  return (
    <Grid 
      sx={{ 
        backgroundColor: '#131929',
        textShadow: '0 0 3px',
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
          backgroundImage: 'radial-gradient(transparent 0 2px, rgba(0, 0, 0, 0.3) 2px)',
          backgroundSize: '5px 5px',
          content: '""',
          zIndex: 10,
        }
      }}
    >
      { infomations[tern] }
    </Grid>
  )
}

export default InformationBar;
