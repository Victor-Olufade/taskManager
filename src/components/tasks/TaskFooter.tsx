import React, { FC, ReactElement } from 'react';
import {
  Switch,
  Box,
  Button,
  FormControlLabel,
} from '@mui/material';
import { ItaskFooter } from './interfaces/ItaskFooter';
import PropTypes from 'prop-types';
import { Status } from '../createTasks/enums';

const TaskFooter: FC<ItaskFooter> = ({
  id,
  status,
  onStatusChange,
  onClick,
}): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
            defaultChecked={status === Status.inProgress}
          />
        }
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: '#fff',
        }}
        onClick={(e) => onClick(e, id)}
      >
        Mark As Completed
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};

export default TaskFooter;
