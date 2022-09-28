import { useState } from 'react';
import { Tab, Tabs, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileIntroduction from '../components/Profile/ProfileIntroduction'
import ProfileNav from '../components/Profile/ProfileNav'
import ProfileTimelineType from '../components/Profile/ProfileTimelineType';
import PostCard from '../components/Post/PostCard';

const TabsContainer = styled('div')(() => ({
    width: '100%',
    border: '1px solid #fff',
    margin: '20px 0',
    // display: 'flex',
}))

const Profile = () => {

    const { id } = useParams();

    const [value, setValue] = useState<'posts' | 'shorts'>('posts');

    const handleChange = (event: React.SyntheticEvent, newValue: 'posts' | 'shorts') => {
        setValue(newValue);
    };
    
    return (
        <Layout>
            <div style={{ position: 'relative' }}>
                <ProfileHeader />
                <div style={{ padding: '25px 50px 70px' }}>
                    <TabsContainer>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                        >
                            
                            <Tab value="posts" label="Posts" sx={{
                                width: '100%'
                            }} />
                            <Tab value="shorts" label="Shorts" sx={{
                                width: '100%'
                            }} />
                        </Tabs>
                    </TabsContainer>
                    
                    <div>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>

                </div>
                <ProfileNav />
            </div>
        </Layout>
    )
}

export default Profile