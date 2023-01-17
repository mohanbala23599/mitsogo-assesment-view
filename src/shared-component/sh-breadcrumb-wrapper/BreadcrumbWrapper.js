import { Grid } from "@mui/material";
import React from "react";
import BreadCrumb from "../sh-breadcrumb/BreadCrumb";
import './breadcrumb-wrapper.css';

const BreadcrumWrapper = React.memo((props) => {
    return(
        <>
            <div className="m-10">
                <BreadCrumb title = {'Overview'}/>
                <Grid container xl = {12} lg = {12} md = {12} sm = {12} xs = {12} pt = {1} sx = {{overflowY : 'auto', height : 'calc(100vh - 116px);'}}>
                    {props.children}
                </Grid>
            </div>
        </>
    )
})

export default BreadcrumWrapper