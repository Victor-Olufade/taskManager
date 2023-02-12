import React, {FC, ReactElement} from 'react';
import {Box, Typography, Stack} from '@mui/material';
import TaskDescription from './TaskDescription';
import TaskTitleField from './_TaskTitleField';
import TaskDateField from '../TaskDateField';
import TaskSelectField from './TaskSelectField';

const CreateTask: FC = (): ReactElement => {
  return (
    <Box
    display='flex'
    flexDirection='column'
    alignItems='flex-start'
    width='100%'
    px={4}
    my={6}
    >
        <Typography
        mb={2} component='h2' variant='h6'
        >Create A Task
        </Typography>

        <Stack width='100%' spacing={2}>
        <TaskTitleField/>

        <TaskDescription/>

        <TaskDateField/>

        <TaskSelectField/>

        </Stack>
        
    </Box>
  )
}

export default CreateTask