import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TrainOrder from './TrainOrder';
import SubExp from './TrainType/SubExp';
import TrainDestination from './TrainDestination.tsx';
import RapidExp from './TrainType/RapidExp';
import InformationBar from './InformationBar';
import RapidLimitedExp from './TrainType/RapidLimitedExp';
import SemiExp from './TrainType/SemiExp';
import Exp from './TrainType/Exp';

const TrainInformationHeader = ({title, subTitle}: {title: string, subTitle: string }) => (
  <Grid>
    <Typography letterSpacing={4} lineHeight={1} fontSize={22}>{ title }</Typography>
    <Typography lineHeight={1} fontSize={14}>{ subTitle }</Typography>
  </Grid>
);

const TrainInformation = () => {
  return (
    <Box sx={{ backgroundColor: '#c4c8d3', display: 'flex', }} pt={2} pl={6} pr={15} >
      <Grid container textAlign={'center'}>
        <Grid item xs={3}>
          <TrainInformationHeader title={'発順'} subTitle={'Order'} />
        </Grid>
        <Grid item xs={3}>
          <TrainInformationHeader title={'種別'} subTitle={'Type'} />
        </Grid>
        <Grid item xs={6}>
          <TrainInformationHeader title={'行先'} subTitle={'Destination'} />
        </Grid>

        <Grid item xs={3} mt={1}>
          <TrainOrder order={'先発'}/>
        </Grid>
        <Grid item xs={3} mt={1}>
          <SemiExp />
        </Grid>
        <Grid item xs={6} mt={1}>
          <TrainDestination 
            destination='出町柳'
            prefix='京都'
            cars={7}
            doors={3}
            displayPattern={[0, 1]}
          />
        </Grid>

        <Grid item xs={12} marginY={3}>
          <InformationBar />
        </Grid>

        <Grid item xs={12} mt={3} mb={5} display='flex'>
          <Grid item xs={3}>
            <TrainOrder order={'次発'}/>
          </Grid>
          <Grid item xs={3}>
            <RapidLimitedExp />
          </Grid>
          <Grid item xs={6}>
            <TrainDestination 
              destination='　淀　'
              cars={7}
              doors={2}
              displayPattern={[0, 1, 2]}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TrainInformation;