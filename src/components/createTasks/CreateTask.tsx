import React, { FC, ReactElement, useState, useEffect, useContext } from 'react';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import TaskDescription from './TaskDescription';
import TaskTitleField from './_TaskTitleField';
import TaskDateField from '../TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Priority, Status } from './enums';
import { useMutation } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequests';
import { IcreateTask } from '../taskarea/interfaces/IcreateTask';
import { toast } from 'react-toastify';
import { TaskStatusContext } from '../../context';

const CreateTask: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] =
    useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );

  const {toggle} = useContext(TaskStatusContext)

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const baseUrl = process.env.REACT_APP_BASEURL as string;

  const createTaskMutation = useMutation(
    (data: IcreateTask) =>
      sendApiRequest(baseUrl, 'POST', data),
  );

  const createTaskHandler = () => {
    if (!title || !description || !date) {
      toast.error('Fill up title, date and description');
      setTimeout(() => {
        return;
      }, 2000);
    }

    const task: IcreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
    setTitle('');
    setDescription('');
  };

  useEffect(()=>{
    if(createTaskMutation.isSuccess){
      setShowSuccess(true)
      toggle()
    }
    const successTimeout = setTimeout(()=>{
      setShowSuccess(false)
    }, 5000)

    return ()=>{
      clearTimeout(successTimeout)
    }
  },[createTaskMutation.isSuccess])

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >

      {showSuccess && (
         <Alert
         severity="success"
         sx={{ width: '100%', marginBottom: '10px' }}
       >
         <AlertTitle>Success</AlertTitle>
         The task has been created successfully
       </Alert>
      )}
     

      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack width="100%" spacing={2}>
        <TaskTitleField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />

        <TaskDescription
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />

        <TaskDateField
          value={date}
          onChange={(date) => setDate(date as Date)}
          disabled={createTaskMutation.isLoading}
        />

        <Stack direction="row" width="100%" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            disabled={createTaskMutation.isLoading}
            items={[
              {
                value: Status.todo,
                label: Status.todo,
              },
              {
                value: Status.inProgress,
                label: Status.inProgress,
              },
            ]}
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as string)
            }
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            disabled={createTaskMutation.isLoading}
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as string)
            }
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress/>}

        <Button
          disabled={
            !title ||
            !description ||
            !status ||
            !date ||
            !priority
          }
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Create a task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTask;
