import React, { FC, ReactElement } from 'react';
import {
  Switch,
  Box,
  Typography,
  Button,
  FormControlLabel,
} from '@mui/material';
import { ItaskFooter } from './interfaces/ItaskFooter';
import PropTypes from 'prop-types';

const TaskFooter: FC<ItaskFooter> = ({
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
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
        control={<Switch onChange={(e)=> onStatusChange(e)} color="warning" />}
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: '#fff',
        }}
        onClick={(e)=> onClick(e)}
      >
        Mark As Completed
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func
}

export default TaskFooter;
