import { Grid } from "@mui/material";
import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Portlet from "../../shared-component/sh-portlet/Portlet";
import CmnChart from "../../shared-component/sh-chart/ChartCmn";
import ListCmn from "../../shared-component/sh-list/ListCmn";
import ShDataGrid from "../../shared-component/sh-datagrid/ShDataGrid";
import ProfilePicImage from '../../assets/profile-pic-05.jpg';
import TwitterLogo from '../../assets/twitter-icn.png';
import FacebookLogo from '../../assets/fb-icn.png';
import LinkedInLogo from '../../assets/linkedin-icn.png';
import WhatsAppLogo from '../../assets/whatsapp-icn.png';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoThumbnail from '../../assets/video-thumbnail.png';
import Divider from '@mui/material/Divider';

import './dashboard.css'

const Dashboard = React.memo(() => {

    const columns = [
        {
            field: 'location',
            headerName: 'Location',
            minWidth: 150,
            flex: 1,
            editable: false,
            headerClassName: 'lastcolumnSeparator'
        },
        {
            field: 'views',
            headerName: 'Views',
            flex: 1,
            editable: false,
            headerClassName: 'lastcolumnSeparator'
        },
        {
            field: 'sales',
            headerName: 'Sales',
            flex: 1,
            editable: false,
            headerClassName: 'lastcolumnSeparator'
        },
        {
            field: 'conversion',
            headerName: 'Conversion',
            flex: 1,
            editable: false,
            headerClassName: 'lastcolumnSeparator'
        },
        {
            field: 'total',
            headerName: 'Total',
            flex: 1,
            editable: false,
            headerClassName: 'lastcolumnSeparator'
        }
    ];
    const rows = [
        { id: 1, location: 'google.com', views: '3746', sales: '752', conversion: '43%', total: '$19,291' },
        { id: 2, location: 'facebook.com', views: '8126', sales: '728', conversion: '32%', total: '$17,638' },
        { id: 3, location: 'twitter.com', views: '8836', sales: '694', conversion: '28%', total: '$16,218' },
        { id: 4, location: 'Direct, email, IM', views: '1173', sales: '645', conversion: '24%', total: '$14,421' },
        { id: 5, location: 'linkedin.com', views: '2739', sales: '539', conversion: '20%', total: '$12,370' },
        { id: 6, location: 'instagram.com', views: '2739', sales: '539', conversion: '20%', total: '$12,370' },
    ];

    const SelectContent = (
        <>
            <FormControl variant="standard" fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                >
                    <MenuItem value={10}>Last 6 months</MenuItem>
                    <MenuItem value={20}></MenuItem>
                    <MenuItem value={30}></MenuItem>
                </Select>
            </FormControl>
        </>
    )

    return (
        <>
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={2} flexWrap = 'wrap-reverse'>
                <Grid item container xl={8} lg={8} md={12} sm={12} xs={12} spacing={2}>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Portlet title={'Statistics'} actions={SelectContent}>
                            <CmnChart type={'spline'} data={[
                                ['data1', 30, 200, 100, 400, 150, 250],
                                ['data2', 50, 20, 10, 40, 15, 25]
                            ]} showXaxis={true} showYaxis={true} showGridX={true} showGridY={true} showLabels = {false} height={'268'} />
                        </Portlet>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Portlet title={'Sales Distribution'}>
                            <CmnChart type={'donut'} data={[
                                ['France', 4260],
                                ['Italy', 3970],
                                ['Japan', 4260],
                                ['Canada', 3970]
                            ]} showXaxis={false} showYaxis={false} showGridX={false} showGridY={false} showLabels = {false} height={'280'} />
                        </Portlet>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className='referr-grid'>
                        <Portlet title={'Referrer'}>
                            <ShDataGrid columns={columns} showCheckBox={false} hideFooter={false} rows={rows} normalgridheight={false} />
                        </Portlet>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx = {{display : {xl : 'none', lg : 'none', md : 'block', sm : 'block', xs : 'block'}}}>
                        <Portlet title={'Product Video'} actions={<IconButton color="primary" aria-label="upload picture" component="label">
                            <MoreVertIcon />
                        </IconButton>}>
                            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
                                <img src={VideoThumbnail} className='product-video-img' alt="product-video" />
                            </Grid>
                        </Portlet>
                    </Grid>
                </Grid>
                <Grid item container xl={4} lg={4} md={12} sm={12} xs={12} spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Portlet>
                            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                                        <img src={ProfilePicImage} className="profile-icn-custom" alt="Profile" />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                                        <h3 className="m-0 user-title">Nick Herasimenka</h3>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                                        <h4 className="m-0 user-state">United States</h4>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center' m = {1}>
                                        <span><img src={TwitterLogo} alt="twitter" /></span>
                                        <span><img src={FacebookLogo} alt="facebook" /></span>
                                        <span><img src={LinkedInLogo} alt="linkedin" /></span>
                                        <span><img src={WhatsAppLogo} alt="whatsapp" /></span>
                                    </Grid>
                                </Grid>
                                {/* <Grid item container xl = {12} lg = {12} md = {12} sm = {12} xs = {12}> */}
                                    <Grid item xl = {12} lg = {12} md = {12} sm = {12} xs = {12}>
                                        <Divider />
                                    </Grid>
                                {/* </Grid> */}
                                <Grid item container xl={12} lg={12} md={12} sm={12} xs={12} display = 'flex' alignItems= 'center'>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h2 className="m-0 user-list-title">Our Users</h2>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign = 'end'>
                                        <IconButton color="primary" aria-label="upload picture" component="label">
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <ListCmn />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Portlet>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx = {{display : {xl : 'block', lg : 'block', md : 'none', sm : 'none', xs : 'none'}}}>
                        <Portlet title={'Product Video'} actions={<IconButton color="primary" aria-label="upload picture" component="label">
                            <MoreVertIcon />
                        </IconButton>}>
                            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
                                <img src={VideoThumbnail} className='product-video-img' alt="product-video" />
                            </Grid>
                        </Portlet>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
})

export default Dashboard