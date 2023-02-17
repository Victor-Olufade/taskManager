import React from 'react';


export interface ItaskFooter{
    id: string,
    status?: string
    onStatusChange: (e: React.ChangeEvent<HTMLInputElement>, id: string)=> void,
    onClick: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, id: string)=> void
}