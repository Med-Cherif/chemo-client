import { styled, Stack, Typography, Paper } from '@mui/material';

const IntroductionWrapper = styled(Paper)(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: 16,
}))

const ProfileIntroduction = () => {
    return (
        <IntroductionWrapper>
            <Typography variant="h5" align='center' gutterBottom>About</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid provident unde illum molestiae debitis.</Typography>
        </IntroductionWrapper>
    )
}

export default ProfileIntroduction