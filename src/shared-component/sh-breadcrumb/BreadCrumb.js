import { Grid } from "@mui/material";
import React from "react";
import ButtonCmn from "../sh-button/ButtonCmn";
import AddIcon from '@mui/icons-material/Add';
import './breadcrumb.css'

const BreadCrumb = React.memo((props) => {
    return(
        <>
            <Grid container xl = {12} lg = {12} md = {12} sm = {12} xs = {12} alignItems = 'center'>
                <Grid item xl = {6} lg = {6} md = {6} sm = {6} xs = {6}>
                    <h1 className="breadcrumb-title">{props.title}</h1>
                </Grid>
                <Grid item xl = {6} lg = {6} md = {6} sm = {6} xs = {6} textAlign = 'end'>
                    <ButtonCmn endIcon = {<AddIcon/>}>Add Funds</ButtonCmn>
                </Grid>
            </Grid>
        </>
    )
})

export default BreadCrumb