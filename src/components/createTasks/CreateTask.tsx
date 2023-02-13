import React, {FC, ReactElement} from 'react';
import {Box, Typography, Stack} from '@mui/material';
import TaskDescription from './TaskDescription';
import TaskTitleField from './_TaskTitleField';
import TaskDateField from '../TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Priority, Status } from './enums';

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

        <Stack direction='row' width='100%' spacing={2}>
        <TaskSelectField label="Status" name="status" items={[
          {
            value: Status.todo.toUpperCase(),
            label: Status.todo.toUpperCase()
          },
          {
            value: Status.inProgress.toUpperCase(),
            label: Status.inProgress.toUpperCase()
          },
        ]}/>
        <TaskSelectField label="Priority" name="priority" items={[
          {
            value: Priority.low.toUpperCase(),
            label: Priority.low.toUpperCase()
          },
          {
            value: Priority.normal.toUpperCase(),
            label: Priority.normal.toUpperCase()
          },
          {
            value: Priority.high.toUpperCase(),
            label: Priority.high.toUpperCase()
          },
        ]}/>
        </Stack>

        </Stack>
        
    </Box>
  )
}

export default CreateTask