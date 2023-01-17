import * as React from 'react';
import { Divider, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProfileImg from '../../assets/profile-pic-01.jpg'
import './header.css';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProfileIcon from '../../assets/profile-icn.png';
import BillIcon from '../../assets/bill-icn.png';
import LogoutIcon from '../../assets/logout-icn.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ProfileImgTwo from '../../assets/profile-pic-02.jpg';
import ProfileImgThree from '../../assets/profile-pic-03.jpg';

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#DCDCDC',
    paddingRight: 3,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),

        width: "auto"
    }
}));

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Header(props) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notificationEl, setNotificationEl] = React.useState(null)
    const open = Boolean(anchorEl);
    const openNotification = Boolean(notificationEl)
    const xlResolutionIdentifier = useMediaQuery(theme.breakpoints.down('xl'));
    const lgResolutionIdentifier = useMediaQuery(theme.breakpoints.down('lg'));
    const mdResolutionIdentifier = useMediaQuery(theme.breakpoints.down('md'));
    const smResolutionIdentifier = useMediaQuery(theme.breakpoints.down('sm'));
    const xsResolutionIdentifier = useMediaQuery(theme.breakpoints.down('xs'));
    // const [largeRes, setLargeRes] = React.useState(false)
    const [smallRes, setSmallRes] = React.useState(false)
    React.useEffect(() => {
        if (xlResolutionIdentifier || lgResolutionIdentifier) {
            // setLargeRes(true)
            setSmallRes(false)
        }
        else {
            // setLargeRes(false)
            setSmallRes(true)
        }
    }, [xlResolutionIdentifier, lgResolutionIdentifier, mdResolutionIdentifier, smResolutionIdentifier, xsResolutionIdentifier])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const notificationClick = (event) => {
        setNotificationEl(event.currentTarget)
    }

    const notificationClose = () => {
        setNotificationEl(null)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem className='menu-align'>
                <img src={ProfileIcon} alt="admin icon" className='m-r-5' /> <span className='menu-list-span'>Profile</span>
            </MenuItem>
            <MenuItem className='menu-align'>
                <img src={BillIcon} alt="bill icon" className='m-r-5' /><span className='menu-list-span'>My account</span>
            </MenuItem>
            <MenuItem className='menu-align'>
                <img src={LogoutIcon} alt="logout icon" className='m-r-5' /><span className='menu-list-span'>Logout</span>
            </MenuItem>
        </Menu>
    );

    console.log("openNotification",openNotification,'notificationEl',notificationEl)

    const notificationMenu = (
            <Menu
                anchorEl={notificationEl}
                id="account-menus"
                open={openNotification}
                onClose={notificationClose}
                // onClick={notificationClick}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <List sx={{ width: 'auto', bgcolor: 'background.paper' }}>
                    <ListItem sx={{ width: 'auto' }}>
                        <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} display='flex' alignItems='center'>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src={ProfileImg} className='img-logo' alt="profile" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Drew James" secondary="Assigned you on the call with Sara" />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign='end' display='flex' alignItems='start'>
                                    <ListItemText secondary="2 min ago" />
                                </Grid>
                            </Grid>
                            <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} display='flex' alignItems='center'>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src={ProfileImgTwo} className='img-logo' alt="profile" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Bavid Kames" secondary="Marked the task New UI as done" />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign='end' display='flex' alignItems='start'>
                                    <ListItemText secondary="5 min ago" />
                                </Grid>
                            </Grid>
                            <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} display='flex' alignItems='center'>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src={ProfileImgThree} className='img-logo' alt="profile" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Lavid Kames" secondary="Added a new comment on Sales task" />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign='end' display='flex' alignItems='start'>
                                    <ListItemText secondary="10 min ago" />
                                </Grid>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Divider />
                            </Grid>
                            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} display = 'flex' justifyContent='center' textAlign='center' alignItems='center'>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <p className='show-more'>Show More</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </Menu>
    )
    return (
        <div className={smallRes ? "bg-header" : "sm-header"}>
            <AppBar position="fixed" open={props.open} className="headermb">
                <Toolbar>
                    {props.showMenu && <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.draweOpen}
                        edge="start"
                        sx={{
                            justifyContent: "space-between",
                            marginRight: 2,
                            ...(props.open && { display: 'none' }),
                        }}
                    >
                        <MenuOpenIcon />
                    </IconButton>}
                    <Box sx={{ flexGrow: 0 }} />
                    <Search className='search-container' sx={{ display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, alignItems: { xl: 'center', lg: 'center', md: 'center', sm: 'none', xs: 'none' }, background: 'transparent' }}>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <FormControl variant="standard" sx={{width : '272px'}}>
                            <Input disableUnderline
                                fullWidth
                                placeholder='Search transactions, invoices or help'
                                id="input-with-icon-adornment"
                            />
                        </FormControl>
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: { xs: 'none', md: 'center', lg: 'center', xl: 'center' } }}>
                        {props.showMenu && <IconButton
                            className="bg-gray"
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={notificationClick}
                        >
                            <Badge className="bg-gray" badgeContent={'5'} color="secondary">
                                {props.notificationIcon}
                            </Badge>
                        </IconButton>}
                        <FormControl variant='standard' fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                            >
                                <MenuItem value={10}>John Doe</MenuItem>
                            </Select>
                        </FormControl>
                        <IconButton
                            onClick={handleClick}
                            className="bg-gray"
                            size="large"
                            color="inherit"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            {/* {props.personIcon} */}
                            <img src={ProfileImg} alt="profile" className='profile-icn-align' />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <SearchIcon />
                        </IconButton>
                        <IconButton
                            className="bg-gray"
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={notificationClick}
                        >
                            <Badge className="bg-gray" badgeContent={'5'} color="secondary">
                                {props.notificationIcon}
                            </Badge>
                        </IconButton>
                        <IconButton
                            onClick={handleClick}
                            className="bg-gray"
                            size="large"
                            color="inherit"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            {/* {props.personIcon} */}
                            <img src={ProfileImg} alt="profile" className='profile-icn-align' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {openNotification && notificationMenu}
        </div>

    );
}
