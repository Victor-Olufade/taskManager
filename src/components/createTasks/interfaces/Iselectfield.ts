import { SelectChangeEvent } from '@mui/material';
import { Idisabled } from "./Idisabled";


export interface ISelectItems{
    value?: string,
    label: string
}

export interface IselectField extends Idisabled{
    name?: string,
    label?: string,
    value?: string
    onChange?: (e: SelectChangeEvent)=> void;
    items?: ISelectItems[]
}

