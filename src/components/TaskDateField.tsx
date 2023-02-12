import React,{FC, ReactElement} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { IdateField } from './createTasks/interfaces/IdateField';
import PropTypes from 'prop-types';

const TaskDateField:FC<IdateField> = (props):ReactElement => {
    const {value= new Date(), onChange= (date)=> console.log(date), disabled= false} = props;

  return (
    <>
    <LocalizationProvider
    dateAdapter={AdapterDateFns}
    >
        <DesktopDatePicker
        label='Task Date'
        inputFormat='dd/MM/yyyy'
        value={value}
        onChange={onChange}
        disabled={disabled}
        renderInput={(params)=>(
            <TextField {...params}/>
        )}
        />
    </LocalizationProvider>
    </>
  )
}

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date)
}

export default TaskDateField