import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import Sidebar from '../../components/sidebar/Sidebar';
import Taskarea from '../../components/taskarea/Taskarea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
      container
      direction="column"
      // justifyContent="center"
      // alignItems="center"
      // minHeight="100vh"
      // p={0}
      // m={0}
      spacing={2}
    >
      <Grid item xs={6} spacing={2}>
        <Taskarea />
      </Grid>
      <Grid item xs spacing={2}>
        <Sidebar />
      </Grid>
    </Grid>
    </Box>
  );
};

export default Dashboard;

//minHeight='100vh'
