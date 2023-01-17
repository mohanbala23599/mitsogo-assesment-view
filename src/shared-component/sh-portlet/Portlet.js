import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import './portlet.css'

const Portlet = React.memo((props) => {
    return (
        <>
            <Card>
                <Grid container xl = {12} lg = {12} md = {12} sm = {12} xs = {12} alignItems = "center" p = {1}>
                    <Grid item xl = {8} lg = {8} md = {7} sm = {7} xs = {7} className = 'portlet-title'>
                        {props.title}
                    </Grid>
                    <Grid item xl = {4} lg = {4} md = {5} sm = {5} xs = {5} sx = {{display : 'flex', justifyContent : 'end'}}>
                        {props.actions}
                    </Grid>
                </Grid>
                <CardContent>
                    <Grid container xl = {12} lg = {12} md = {12} sm = {12} xs = {12}>
                        {props.children}
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
})

export default Portlet