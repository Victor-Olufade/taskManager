import React,{FC, ReactElement} from 'react';
import {TextField} from '@mui/material';
import { Itextfield } from './interfaces/Itextfield';
import PropTypes from 'prop-types';


const TaskDescription: FC<Itextfield> = ({onChange, disabled=false}): ReactElement => {

  onChange = (e) => console.log(e);

  return (
    <TextField 
    id="description"
    name="description"
    label="Description"
    placeholder="Description"
    variant="outlined"
    size="small"
    onChange={onChange}
    disabled={disabled}
    multiline
    rows={4}
    fullWidth/>
  )
}

TaskDescription.propTypes ={
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

export default TaskDescription;