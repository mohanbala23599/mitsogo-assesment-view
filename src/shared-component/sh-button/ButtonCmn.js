import React from "react";
import Button from '@mui/material/Button';
import './button-cmn.css';

const ButtonCmn = React.memo((props) => {
    return (
        <>
            <Button endIcon={props.endIcon} startIcon={props.startIcon} className='text-capitalize' variant="contained" color={props.color} onClick={props.click} size={props.size}>
                {props.children}
            </Button>
        </>
    )
})

export default ButtonCmn