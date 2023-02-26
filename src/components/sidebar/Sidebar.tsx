import React, { FC, ReactElement, useContext } from 'react'
import {Grid} from '@mui/material'
import Profile from '../profile/Profile';
import CreateTask from '../createTasks/CreateTask';
import { AuthContext } from '../../context/authenticationContext/auth';


const Sidebar: FC = (): ReactElement => {
  const {user} = useContext(AuthContext);
  
  return (
    <Grid item md={4} sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
       <Profile name={user && user.name}/>
       <CreateTask/>
    </Grid>
  )
}

export default Sidebar