import { Button, MenuItem, Stack } from '@mui/material'
import React from 'react'

const SubmenuFooter = () => {
    return (
        <MenuItem sx={{ padding: 0 }}>
            <Button sx={{ width: '100%' }}>View all</Button>
        </MenuItem>
    )
}

export default SubmenuFooter