import React, { FC, ReactElement } from 'react';
import {
  Grid,
  Box,
  Alert,
  LinearProgress,
} from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../tasks/Task';
import { useQuery, useMutation } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequests';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../createTasks/enums';
import { IupdateTask } from './interfaces/IupdateTask';

const Taskarea: FC = (): ReactElement => {
  const baseUrl = process.env.REACT_APP_BASEURL as string;
  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        baseUrl,
        'GET',
      );
    },
  );

  const updateTask = useMutation(
    (data: IupdateTask)=> sendApiRequest(baseUrl, 'PUT', data)
  )

  const onStatusChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    updateTask.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    })
  }

  const onClickMarkComplete = (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, id: string
  ) => {
    updateTask.mutate({
      id,
      status: Status.completed
    })
  }

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>

      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}

            {!error &&
              Array.isArray(data) &&
              data.length === 0 && (
                <Alert severity="warning">
                  You do not have any tasks yet. Start by
                  creating a task.
                </Alert>
              )}
            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((task) => (
                <>
                {task.status !== Status.completed && 
                 <Task
                 key={task.id}
                 id={task.id}
                 title={task.title}
                 description={task.description}
                 status={task.status}
                 date={new Date(task.date)}
                 priority={task.priority}
                 onStatusChange={onStatusChangeHandler}
                 onClick={onClickMarkComplete}
               />
                }
                </>
              ))
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Taskarea;
