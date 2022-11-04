import { Paper, Typography, styled, Container } from '@mui/material'
import React, { useMemo, useState } from 'react'
import Login from '../components/Authentication/Login'
import Register from '../components/Authentication/Register'
import Page from './_Page'

const Wrapper = styled('div')(({}) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 0'
}))

const PaperStyled = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: '450px',
    color: theme.palette.text.dark,
    padding: '30px'
}))



const Authentication = () => {

    const [type, setType] = useState<'login' | 'register'>('login');

    const navigateTo = (type: 'login' | 'register') => {
        setType(type)
    }

    const COMPONENTS: {
        login: JSX.Element
        register: JSX.Element
    } = useMemo(() => ({
        login: <Login navigateTo={navigateTo} />,
        register: <Register navigateTo={navigateTo} />
    }), [])

    return (
        <Page>
            <Container>
                <Wrapper>
                    <PaperStyled>
                        <Typography 
                            align='center' 
                            variant='h4'
                            gutterBottom
                            sx={{
                                textTransform: 'capitalize',
                            }}
                        >
                            {type}
                        </Typography>
                        {
                            COMPONENTS[type]
                        }
                    </PaperStyled>
                </Wrapper>
            </Container> 
        </Page>
    )
}

export default Authentication