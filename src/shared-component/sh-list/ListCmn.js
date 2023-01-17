import React from "react";
import { Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ProfileImg from '../../assets/profile-pic-01.jpg';
import ProfileImgTwo from '../../assets/profile-pic-02.jpg';
import ProfileImgThree from '../../assets/profile-pic-03.jpg';
import './list-cmn.css'

const ListCmn = React.memo(() => {
    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem sx={{ width: '100%' }}>
                    <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} display='flex' alignItems='center'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={ProfileImg} className='img-logo' alt="profile" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Drew James" secondary="United States" />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign='end' display = 'flex' alignItems='end'>
                                <ListItemText secondary="Mobile : 8715674877" />
                            </Grid>
                        </Grid>
                        <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} display='flex' alignItems='center'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={ProfileImgTwo} className='img-logo' alt="profile" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Bavid Kames" secondary="United States" />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign='end' display = 'flex' alignItems='end'>
                                <ListItemText secondary="Mobile : 8715674877" />
                            </Grid>
                        </Grid>
                        <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} display='flex' alignItems='center'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={ProfileImgThree} className='img-logo' alt="profile" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Lavid Kames" secondary="United States" />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign='end' display = 'flex' alignItems='end'>
                                <ListItemText secondary="Mobile : 8715674877" />
                            </Grid>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </>
    )
})

export default ListCmn