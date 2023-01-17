import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './navbar.css';
import Tooltip from '@mui/material/Tooltip';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';

import HomeCustomIcon from '../../assets/home-icn.png';
import DashboardCustomIcon from '../../assets/dashboard-icn.png';
import InboxCustomIcon from '../../assets/inbox-icn.png';
import ProductCustomIcon from '../../assets/product-icn.png';
import AdminCustomIcon from '../../assets/admin-icn.png';

const drawerWidth = 240;



const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',


        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
            background: 'black',
            color: 'white',
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            background: 'black',
            color: 'white',
        }),
    }),
);

export default function Navbar(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const theme = useTheme();
    const xlResolutionIdentifier = useMediaQuery(theme.breakpoints.down('xl'));
    const lgResolutionIdentifier = useMediaQuery(theme.breakpoints.down('lg'));
    const mdResolutionIdentifier = useMediaQuery(theme.breakpoints.down('md'));
    const smResolutionIdentifier = useMediaQuery(theme.breakpoints.down('sm'));
    const xsResolutionIdentifier = useMediaQuery(theme.breakpoints.down('xs'));
    const [largeRes, setLargeRes] = React.useState(false)
    const [smallRes, setSmallRes] = React.useState(false)
    React.useEffect(() => {
        if (xlResolutionIdentifier || lgResolutionIdentifier) {
            setLargeRes(true)
            setSmallRes(false)
        }
        else {
            setLargeRes(false)
            setSmallRes(true)
        }
    }, [xlResolutionIdentifier, lgResolutionIdentifier, mdResolutionIdentifier, smResolutionIdentifier, xsResolutionIdentifier])

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        props.drawerClose()
    };

    return (
        <>


            {largeRes && <SwipeableDrawer
                className='small-drawer'
                anchor={'left'}
                open={props.open}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >

                <DrawerHeader>
                    <div className='logo-custom'><h1 className='logo-fs'>ACME</h1></div>
                    <IconButton onClick={props.drawerClose} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={() => {
                                props.navigateOne()
                                setSelectedIndex(1)
                            }
                            }
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Home" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={HomeCustomIcon} alt="Home icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Home"} sx={{ opacity: props.open ? 1 : 0 }} />


                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={() => {
                                setSelectedIndex(2)
                                props.navigateTwo()
                            }
                            }
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Dashboard" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={DashboardCustomIcon} style={{ marginLeft: '-5px' }} alt="Dashboard icon" />
                            </ListItemIcon>
                            </Tooltip>
                            <ListItemText primary={"Dashboard"} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={() => {
                                setSelectedIndex(3)
                                props.navigateThree()
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Inbox" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={InboxCustomIcon} alt="Inbox icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Inbox"} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={() => {
                                setSelectedIndex(4)
                                props.navigateFour()
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Products" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={ProductCustomIcon} style={{ marginLeft: '-1px' }} alt="Product icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Products"} className={props.open ? 'break-space' : ''} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={() => {
                                setSelectedIndex(5)
                                props.navigateFive()
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Admin" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={AdminCustomIcon} alt="admin icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Admin"} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </SwipeableDrawer>}
            {smallRes && <Drawer variant="permanent" open={props.open} className="sidebar_bg">
                <DrawerHeader>
                    <div className='logo-custom'><h1 className='logo-fs'>ACME</h1></div>
                    {props.open && <IconButton onClick={props.drawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>}
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={() => {
                                props.navigateOne()
                                setSelectedIndex(1)
                            }
                            }
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Home" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={HomeCustomIcon} alt="Home icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Home"} sx={{ opacity: props.open ? 1 : 0 }} />


                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={() => {
                                setSelectedIndex(2)
                                props.navigateTwo()
                            }
                            }
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Dashboard" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={DashboardCustomIcon} style={{ marginLeft: '-5px' }} alt="Dashboard icon" />
                            </ListItemIcon>
                            </Tooltip>
                            <ListItemText primary={"Dashboard"} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={() => {
                                setSelectedIndex(3)
                                props.navigateThree()
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Inbox" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={InboxCustomIcon} alt="Inbox icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Inbox"} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={() => {
                                setSelectedIndex(4)
                                props.navigateFour()
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Products" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={ProductCustomIcon} style={{ marginLeft: '-1px' }} alt="Product icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Products"} className={props.open ? 'break-space' : ''} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={() => {
                                setSelectedIndex(5)
                                props.navigateFive()
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,

                            }
                            }
                        >
                            <Tooltip title="Admin" placement="right" arrow><ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={AdminCustomIcon} alt="admin icon" />
                            </ListItemIcon></Tooltip>
                            <ListItemText primary={"Admin"} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>}
        </>
    );
}
