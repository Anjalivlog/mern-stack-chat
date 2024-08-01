import React from 'react';
import { Box, Drawer, styled, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const Header = styled(Box)`
    background: #008069;
    height: 107px;
    color: #FFFFFF;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`;

const Component = styled(Box)`
    background: #ededed;
    height: 85%;
`;

const Text = styled(Typography)`
    font-size: 18px;
`;

const drawerStyle = {
    left: 20,
    top: 15,
    height: '95%',
    width: '36%',
    boxShadow: 'none'
}
const InfoDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBackIcon onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer