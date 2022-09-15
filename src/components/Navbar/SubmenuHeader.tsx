import { Button, MenuItem, Stack, Typography } from '@mui/material'
import React from 'react'



const SubmenuHeader = ({ title }: { title: string }) => {
    return (
        
            <Stack direction="row" justifyContent="space-between" alignItems="center" px={2}>
                <Typography variant='subtitle1' sx={{ color: '#000' }}>{title}</Typography>
                <Button >Marks all as read</Button>
            </Stack>
        
    )
}

export default SubmenuHeader