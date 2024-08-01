import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size: 13px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A; 
`;
const HeaderMenu = ({ setOpenDrawer }) => {
    const [open, setOpen] = useState(null);

    const handleclose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleclose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => { handleclose(); setOpenDrawer(true); }}>Profile</MenuOption>
                <MenuOption onClick={handleclose}>My account</MenuOption>
                <MenuOption onClick={handleclose}>Logout</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu