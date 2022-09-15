import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';

export const sidebarItems = {
    menu: [
        { id: 1, text: 'Home', href: '/', Icon: HomeIcon },
        { id: 2, text: 'Shorts', href: '/shorts', Icon: VideoLibraryIcon },
        { id: 3, text: 'Saved', href: '/saved', Icon: TurnedInIcon },
        { id: 4, text: 'Setting', href: '/settings', Icon: SettingsIcon },
    ]
    }