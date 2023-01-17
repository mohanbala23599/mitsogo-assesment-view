import React, { useState, useEffect } from "react";
import './layout.css'
import Header from "../sh-header/Header";
import Navbar from "../sh-navbar/NavBar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BreadcrumWrapper from "../sh-breadcrumb-wrapper/BreadcrumbWrapper";

const LayoutWrapper = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = React.useState(false);
    const [layoutActivation, setLayoutActivation] = useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (location.pathname === "/") {
            setLayoutActivation(false)
        }
        // else {
        //     setLayoutActivation(false)
        // }
    }, [location])

    const navigateOne = () => {
        navigate('home', { replace: false })
    }
    const navigateTwo = () => {
        navigate('', { replace: false })
    }
    const navigateThree = () => {
        navigate('inbox', { replace: false })
    }
    const navigateFour = () => {
        navigate('product', { replace: false })
    }
    const navigateFive = () => {
        navigate('admin', { replace: false })
    }
    // child calls end

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    let Title = () => {
        return (
            <div className="line-height-normal">
                <p className="mar-0 text-uppercase">team</p>
                <p className="mar-0 pd-l-2px font-size-12px">workology</p>
            </div>
        )
    }
    return (
        <Box sx={{ display: 'flex' }}>
            {!layoutActivation && <Header showMenu={true} draweOpen={handleDrawerOpen} title={<Title />} open={open} notificationIcon = {<NotificationsNoneIcon/>} />}
            {!layoutActivation && <Navbar navigateOne = {navigateOne} navigateTwo = {navigateTwo} navigateThree = {navigateThree} navigateFour = {navigateFour} navigateFive = {navigateFive} drawerClose={handleDrawerClose} open={open} />}
            <Box component="main" sx={!layoutActivation ? { flexGrow: 1, p: 3 } : { flexGrow: 0, p: 0 }} className="w-100 bg-clr-F4F6FD p-0">
                {!layoutActivation && <DrawerHeader />}
                <div maxWidth="xl" className={!layoutActivation ? 'p-0' : 'css-19r6kue-MuiContainer-root p-0'}>
                    <BreadcrumWrapper>
                        {props.children}
                    </BreadcrumWrapper>
                </div>
            </Box>
        </Box>
    )
}

export default LayoutWrapper