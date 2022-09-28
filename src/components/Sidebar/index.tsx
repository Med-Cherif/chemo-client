import { Typography, Grid, styled, List, ListSubheader, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalState } from '../../context/AppContext';
import { sidebarItems } from "../../data/sidebar"
import { Link } from 'react-router-dom';

const SidebarStyled = styled('aside')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: '100%',
    maxWidth: 300,
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    zIndex: theme.zIndex.mobileStepper,
    transform: 'translateX(-100%)',
    transition: theme.transitions.create('transform', {
        duration: '0.4s'
    }),
    [theme.breakpoints.up('lg')]: {
        transform: 'translateX(0%) !important',
    }
}))

const ListSubheaderStyled = styled(ListSubheader)(({ theme }) => ({
    background: 'transparent',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '600',
    color: theme.palette.text.secondary
}))

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
    color: theme.palette.text.primary
}))

const Sidebar = () => {

    const { closeSidebar, sidebarVisible } = useGlobalState()

    return (
        <SidebarStyled
            sx={{
                transform: sidebarVisible ? 'translateX(0%)' : 'translateX(-100%)'
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" p={2}>
                <Typography variant="h4">
                    <Link to="/">Chemo</Link>
                </Typography>
                <CloseIcon onClick={closeSidebar} sx={{ cursor: 'pointer', display: { lg: 'none' } }} />
            </Grid>

            <div>
                {Object.entries(sidebarItems).map(([key, list]) => (
                    <List
                        sx={{ my: 2 }}
                        key={key}
                        component="nav"
                        subheader={
                            <ListSubheaderStyled>{key}</ListSubheaderStyled>
                        }
                    >
                        {list.map(({ href, text, Icon, id }) => (
                            <Link key={id} to={href}>
                                <ListItem disablePadding>
                                    <ListItemButtonStyled disableRipple>
                                        <ListItemIcon>
                                            <Icon fontSize="medium" sx={{ color: 'text.primary' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <Typography fontWeight="600" fontSize="16px" variant="subtitle1">{text}</Typography>
                                        } />
                                    </ListItemButtonStyled> 
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                ))}
            </div>

        </SidebarStyled>
    )
}

export default Sidebar