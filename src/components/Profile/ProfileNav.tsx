import { styled, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';

const links = [
    { id: 1, text: 'Timeline', href: '' },
    { id: 2, text: 'Followings', href: '?link=followings' },
    { id: 3, text: 'Followers', href: '?link=followers' },
]

const BottomNavigationStyled = styled(BottomNavigation)(({ theme }) => ({
    position: 'fixed',
    width: '100%',
    bottom: 0,
    left: 0,
    background: theme.palette.primary.main,
    [theme.breakpoints.up('lg')]: {
        left: 300,
        width: 'calc(100% - 300px)',
    }
}))

const BottomNavigationActionStyled = styled(BottomNavigationAction)(() => ({
    "&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected" : {
        borderTop: '2px solid #fff',
        color: '#fff',
        
    },
    '& .css-imwso6-MuiBottomNavigationAction-label': {
        width: '100%',
        height: '100%'
    },
    '& .css-imwso6-MuiBottomNavigationAction-label > a': {
        fontSize: 16,
        fontWeight: 600,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const ProfileNav = () => {

    const { search } = useLocation();
    const value = links.findIndex(link => link.href === search);

    return (
        <BottomNavigationStyled
            showLabels
            color='text'
            value={(value >= 0 && value < links.length) ? value : 0}

        >
            {links.map(({ id, text, href }, index) => (
                <BottomNavigationActionStyled key={id} label={
                    <Link to={href}>{text}</Link>
                } />
                
            ))}
        </BottomNavigationStyled>
    )
}

export default ProfileNav