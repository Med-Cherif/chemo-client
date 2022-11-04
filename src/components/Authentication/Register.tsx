import { Button, MenuItem, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import InputText from '../Form/InputText'

interface IProps {
    navigateTo: (type: 'login' | 'register') => void
}

const initialValues = {
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    gender: '',
    birthday: '',
}

const GENDERS = [
    '',
    'MALE',
    'FEMALE',
]

const Register = ({ navigateTo }: IProps) => {
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <form>
            <InputText
                name="username"
                label='Username'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.username}
                required
            />
            <InputText
                name="name"
                label='Name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                required
            />
            <InputText
                name="email"
                label='Email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                required
            />
            <TextField
                select
                label="Gender"
                name='gender'
                value={formik.values.gender}
                onChange={formik.handleChange}
                sx={{
                    width:'100%',
                    marginBottom: '16px'
                }}
            >
                {GENDERS.map(gender => (
                    <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                ))}
            </TextField>
            <InputText 
                label='Birthday'
                name='birthday'
                placeholder='YYYY-MM-DD'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
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
            <InputText 
                label='Confirm Password'
                name='confirmPassword'
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
                Register
            </Button>

            <Typography
                sx={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}
                align="center"
                onClick={() => navigateTo('login')}
            >Already a User ? Login</Typography>
        </form>
    )
}

export default Register