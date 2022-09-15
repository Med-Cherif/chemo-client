import { Stack, Avatar, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import { MenuComponents } from '.';

interface IProps {
    openMenu: (component: MenuComponents) => (e: any) => void;
}

const UserOptions = ({ openMenu }: IProps) => {
    return (
        <Stack direction="row" alignItems='center' gap={2}>
            <Badge 
                badgeContent={2}
                color="success"
            >
                <NotificationsIcon onClick={openMenu('notification')} sx={{ cursor: 'pointer' }} />
            </Badge>
            <Badge badgeContent={2} color="success"><MessageIcon onClick={openMenu('messages')} sx={{ cursor: 'pointer' }} /></Badge>
            <Avatar onClick={openMenu('profile')} alt='username' src={require('../../assets/images/my-pic.jpg')} sx={{ cursor: 'pointer' }} />
        </Stack>
    )
}

export default UserOptions