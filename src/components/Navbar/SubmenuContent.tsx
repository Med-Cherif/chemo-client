import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, MenuItem, MenuList, Stack, Typography } from '@mui/material'
import React from 'react'

const SubmenuContent = () => {
    return (
        <List>
            <ListItem 
                sx={{ border: '1px solid #e5e5e5', borderLeft: 0, borderRight: 0 }} 
                disablePadding
                secondaryAction={
                    <Typography sx={{ color: 'text.dark' }} variant='body2'>2 min ago</Typography>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="P" />
                    </ListItemAvatar> 
                    <ListItemText 
                        sx={{ color: '#000' }} 
                        primary={<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>username</Typography>} 
                        secondary={<Typography variant="body2">Hello bibo</Typography>} 
                    />
                </ListItemButton>
            </ListItem>
            <ListItem 
                sx={{ border: '1px solid #e5e5e5', borderLeft: 0, borderRight: 0 }} 
                disablePadding
                secondaryAction={
                    <Typography sx={{ color: 'text.dark' }} variant='body2'>2 min ago</Typography>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="P" />
                    </ListItemAvatar> 
                    <ListItemText 
                        sx={{ color: '#000' }} 
                        primary={<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>username</Typography>} 
                        secondary={<Typography variant="body2">Hello bibo</Typography>} 
                    />
                </ListItemButton>
            </ListItem>
            <ListItem 
                sx={{ border: '1px solid #e5e5e5', borderLeft: 0, borderRight: 0 }} 
                disablePadding
                secondaryAction={
                    <Typography sx={{ color: 'text.dark' }} variant='body2'>2 min ago</Typography>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="P" />
                    </ListItemAvatar> 
                    <ListItemText 
                        sx={{ color: '#000' }} 
                        primary={<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>username</Typography>} 
                        secondary={<Typography variant="body2">Hello bibo</Typography>} 
                    />
                </ListItemButton>
            </ListItem>
            <ListItem 
                sx={{ border: '1px solid #e5e5e5', borderLeft: 0, borderRight: 0 }} 
                disablePadding
                secondaryAction={
                    <Typography sx={{ color: 'text.dark' }} variant='body2'>2 min ago</Typography>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="P" />
                    </ListItemAvatar> 
                    <ListItemText 
                        sx={{ color: '#000' }} 
                        primary={<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>username</Typography>} 
                        secondary={<Typography variant="body2">Hello bibo</Typography>} 
                    />
                </ListItemButton>
            </ListItem>
            <ListItem 
                sx={{ border: '1px solid #e5e5e5', borderLeft: 0, borderRight: 0 }} 
                disablePadding
                secondaryAction={
                    <Typography sx={{ color: 'text.dark' }} variant='body2'>2 min ago</Typography>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="P" />
                    </ListItemAvatar> 
                    <ListItemText 
                        sx={{ color: '#000' }} 
                        primary={<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>username</Typography>} 
                        secondary={<Typography variant="body2">Hello bibo</Typography>} 
                    />
                </ListItemButton>
            </ListItem>
            <ListItem 
                sx={{ border: '1px solid #e5e5e5', borderLeft: 0, borderRight: 0 }} 
                disablePadding
                secondaryAction={
                    <Typography sx={{ color: 'text.dark' }} variant='body2'>2 min ago</Typography>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="P" />
                    </ListItemAvatar> 
                    <ListItemText 
                        sx={{ color: '#000' }} 
                        primary={<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>username</Typography>} 
                        secondary={<Typography variant="body2">Hello bibo</Typography>} 
                    />
                </ListItemButton>
            </ListItem>
            <ListItem 
                sx={{ border: '1px solid #e5e5e5', borderLeft: 0, borderRight: 0 }} 
                disablePadding
                secondaryAction={
                    <Typography sx={{ color: 'text.dark' }} variant='body2'>2 min ago</Typography>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="P" />
                    </ListItemAvatar> 
                    <ListItemText 
                        sx={{ color: '#000' }} 
                        primary={<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>username</Typography>} 
                        secondary={<Typography variant="body2">Hello bibo</Typography>} 
                    />
                </ListItemButton>
            </ListItem>
        </List> 
    )
}

export default SubmenuContent