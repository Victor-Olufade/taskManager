import React, { FC, ReactElement } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const TaskSelectField: FC = (): ReactElement => {
  return (
    <FormControl>
        <InputLabel id='status'>Status</InputLabel>
        <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
  );
};

export default TaskSelectField;
