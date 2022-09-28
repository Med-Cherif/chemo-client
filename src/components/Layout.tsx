import { styled } from '@mui/material'
import BottomAction from './BottomAction'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface IProps {
    children: React.ReactNode
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
            <BottomAction />
            <Sidebar />
        </div>
    )
}

export default Layout