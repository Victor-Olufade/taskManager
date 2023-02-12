import React,{FC, ReactElement} from 'react'
import {TextField} from '@mui/material'
import { Itextfield } from './interfaces/Itextfield'
import PropTypes from 'prop-types';

const TaskTitleField: FC<Itextfield> = ({onChange, disabled=false}): ReactElement => {
   
    onChange = (e) => console.log(e);
    
  return (
    <TextField
    id='title'
    label='Task Title'
    placeholder='Task Title'
    variant='outlined'
    size='small'
    name='title'
    disabled={disabled}
    onChange={onChange}
    fullWidth
    />
  )
}

TaskTitleField.propTypes ={
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

export default TaskTitleField