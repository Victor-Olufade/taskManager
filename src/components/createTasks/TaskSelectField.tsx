import React, { FC, ReactElement } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { IselectField } from './interfaces/Iselectfield';
import PropTypes from 'prop-types';

const TaskSelectField: FC<IselectField> = (
  props,
): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    onChange = (e) => console.log(e),
    items = [{ value: '', label: 'Add Items' }],
    name = 'selectBox',
    disabled = false,
  } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items &&
          items.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    )
}

export default TaskSelectField;
