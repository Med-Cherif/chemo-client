import { MenuItem, styled } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
    width: '150px',
    color: theme.palette.text.dark
}))

const LinkStyled = styled(Link)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const ProfileSubmenu = () => {
    return (
        <>
            <MenuItemStyled>
                <LinkStyled to="/profile/123">
                    <LogoutIcon sx={{ mr: 1 }} /> Logout
                </LinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
                <LogoutIcon sx={{ mr: 1 }} /> Logout
            </MenuItemStyled>
        </>
    )
}

export default ProfileSubmenu