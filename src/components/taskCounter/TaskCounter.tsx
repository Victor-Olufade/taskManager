import React, { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { ItaskCounter } from './interfaces/ItaskCounter';
import { Status } from '../createTasks/enums';
import {
  ShowCorrectBorderColor,
  EmmitCorrectLabel,
} from './helpers';
import PropTypes from 'prop-types';

const TaskCounter: FC<ItaskCounter> = ({
  status = Status.completed,
  count = 0,
}): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${ShowCorrectBorderColor(
              status,
            )}`,
          }}
        >
          <Typography color="#fff" variant="h4">
            {count}
          </Typography>
        </Avatar>

        <Typography
          color="#fff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {EmmitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
  count: PropTypes.number,
};

export default TaskCounter;
