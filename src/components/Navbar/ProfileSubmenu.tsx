import { MenuItem, styled } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import X from "@mui/icons-material/AccountCircle"
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
                    <X sx={{ mr: 1 }} /> Profile
                </LinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
                <LogoutIcon sx={{ mr: 1 }} /> Logout
            </MenuItemStyled>
        </>
    )
}

export default ProfileSubmenu