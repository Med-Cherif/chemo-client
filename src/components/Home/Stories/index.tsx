import { Paper, Stack } from '@mui/material'
import StoryAvatar from './StoryAvatar'

const Stories = () => {
    return (
        <Paper sx={{
            bgcolor: 'primary.main',
            px: 1,
            pt: 1,
        }}>
            <div className='stories-avatars-list'>
                <Stack direction="row" gap={2} sx={{
                    mb: 1
                }}>
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                    <StoryAvatar />
                </Stack>
            </div>
        </Paper>
    )
}

export default Stories