import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import userClient from '../../gql/client';
import { LOGIN } from '../../gql/users/userQueries';
import InputText from '../Form/InputText';

const initialValues = {
    preferred: '',
    password: ''
}

interface IProps {
    navigateTo: (type: 'login' | 'register') => void
}

const Login = ({ navigateTo }: IProps) => {

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            
            try {
                const response = await userClient.request(LOGIN, {
                    data: {
                        "field": values.preferred,
                        "password": values.password
                    }
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }

        }
    })

    return (
        <form>
            <InputText 
                name="preferred"
                label='Email Or Username'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.preferred}
                required
            />
            <InputText 
                label='Password'
                name='password'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                required
            />
            <Button 
                sx={{ width: '100%' }} 
                color='success' 
                variant='contained'
                onClick={() => formik.handleSubmit()}
            >
                Login
            </Button>

            <Typography
                sx={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    marginTop: '20px',
                }}
                align="center"
                onClick={() => navigateTo('register')}
            >New here ? Register</Typography>
        </form>
    )
}

export default Login