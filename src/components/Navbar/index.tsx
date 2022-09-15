import { useState } from "react";
import { Grid, styled, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalState } from '../../context/AppContext';
import SearchBox from './SearchBox';
import UserOptions from './UserOptions';
import MessagesSubmenu from './MessagesSubmenu';
import NotificationsSubmenu from './NotificationsSubmenu';
import ProfileSubmenu from './ProfileSubmenu';
import SearchContent from "./SearchContent";

const subMenus = {
    notification: <NotificationsSubmenu />,
    profile: <ProfileSubmenu />,
    messages: <MessagesSubmenu />,
    search: <SearchContent />
}

const MenuStyled = styled(Menu)(({ theme }) => ({
    "& .css-kltcmi-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper": {
        // width: '380px',
        top: '72px !important',
        maxHeight: 'calc(100% - 80px) !important',
    },
    [theme.breakpoints.down('sm')]: {
        "& .css-kltcmi-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper": {
            width: '100%'
        }
    },
}))

export type MenuComponents = 'notification' | 'profile' | 'messages' | 'search'

const Navbar = () => {

    const { searchContentRef, openSidebar } = useGlobalState()

    const [{ anchorEl, component }, setSubmenuData] = useState<{
        anchorEl: HTMLElement | null
        component: MenuComponents | null
    }>({
        anchorEl: null,
        component: null
    })

    const openMenu = (component: MenuComponents) => {
        return (event: any) => {
            setSubmenuData({
                anchorEl: event.target,
                component
            })
        }
    }

    const openSearchContent = (element: HTMLElement) => {
        setSubmenuData({
            anchorEl: element,
            component: 'search'
        })
        setTimeout(() => {
            if (!searchContentRef.current) return;
            const { width } = element.getBoundingClientRect();
            searchContentRef.current.style.width = width + 'px'
        }, 0)
    }

    const closeMenu = () => {
        setSubmenuData({
            anchorEl: null,
            component: null
        });
      };

    return (
        <Grid 
            container 
            alignItems='center' 
            justifyContent='space-between' 
            sx={{ bgcolor: 'primary.main', color: 'text.primary', height: '72px' }} 
            px={2} 
            py={2} 
            gap={2}
        >
            <Grid item sx={{ display: { lg: 'none', display: 'flex', alignItems: 'center' } }}>
                <MenuIcon onClick={openSidebar} sx={{ cursor: 'pointer' }} fontSize="large" />
            </Grid>

            <Grid item sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }}>
                <SearchBox openSearchContent={openSearchContent} />
            </Grid>

            <Grid item>
                <UserOptions openMenu={openMenu} />    
            </Grid>

            <MenuStyled
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                sx={{ color: 'text.dark' }}
            >
                { component && subMenus[component] }
            </MenuStyled>

        </Grid>
    )
}

export default Navbar