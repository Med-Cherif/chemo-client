import { styled, Avatar, Stack, Typography } from '@mui/material';
import ProfileHeaderAction from './ProfileHeaderAction';

const img = require('../../assets/images/cover.jpg');
const profileImg = require('../../assets/images/my-pic.jpg')

const CoverPictureWrapper = styled('div')(() => ({
    height: 220,
    position: 'relative',
}))

const CoverPicture = styled('img')(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}))

const ProfilePersonelInfo = styled('div')(() => ({
    background: 'rgba(0, 0, 0, .5)',
    backdropFilter: 'blur(6px)',
    color: '#fff',
    padding: 16,
    borderRadius: 6,
    flex: 1
}))

const ProfileHeader = () => {
    return (
        <div>
            <CoverPictureWrapper>
                <CoverPicture src={img} alt='cover' />
            </CoverPictureWrapper>
            <Stack 
                direction="row" 
                alignItems="center"
                gap={4}
                sx={{ marginTop: '-100px', px: 4 }} 
            >
                <Avatar src={profileImg} alt="Profile" sx={{ width: 200, height: 200, border: '1px solid gray' }} />
                
                <ProfilePersonelInfo>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <div>
                            <Typography variant="h5">Bouaziz Mohamed Cherif</Typography>
                            <Typography sx={{ color: "#999" }} variant="subtitle1">@mohamed_21</Typography>
                        </div>
                        <ProfileHeaderAction />
                    </Stack>
                </ProfilePersonelInfo>
                
            </Stack>

        </div>
    )
}

export default ProfileHeader