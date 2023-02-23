import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ItaskDescription } from './interfaces/ItaskDescription';
import PropTypes from 'prop-types';

const TaskDescription: FC<ItaskDescription> = ({
  description = 'Lorem ipsum dolor sit, amet',
}): ReactElement => {
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};

export default TaskDescription;
