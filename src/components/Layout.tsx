import { Box, styled } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface IProps {
    children: JSX.Element
}

const LayoutContainer = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        marginLeft: '300px'
    }
}))

const Layout = ({ children }: IProps) => {
    return (
        <div>
            <LayoutContainer>
                <Navbar />
                {children}
            </LayoutContainer>
            <Sidebar />
        </div>
    )
}

export default Layout