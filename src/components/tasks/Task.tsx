import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/system';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import { Itask } from './interfaces/Itask';
import { Status } from '../createTasks/enums';
import { Priority } from '../createTasks/enums';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/RenderPriorityBorderColor';

const Task: FC<Itask> = (props): ReactElement => {
  const {
    title = 'title for now',
    date = new Date(),
    description = 'this is my task',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange,
    onClick,
    id,
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
        id={id}
        status={status}
      />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  priority: PropTypes.string,
  status: PropTypes.string,
};

export default Task;
