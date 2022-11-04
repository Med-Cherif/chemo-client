import { Container, Box } from '@mui/material'
import Stories from '../components/Home/Stories'
import Layout from '../components/Layout'
import PostsType from '../components/Home/PostsType'
import PostCard from '../components/Post/PostCard'
import Modal from '../components/Modal'
import { useGlobalState } from '../context/AppContext'
import Page from './_Page'

const Home = () => {

    const { closeModal, isModalOpen } = useGlobalState()

    return (
        <Page>
            <Layout>
                <Box sx={{
                    py: 2
                }}>
                    <Container maxWidth="xl">
                        <Stories />
                        <PostsType />
                        <div>
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </div>
                    </Container> 
                </Box>
                <Modal 
                    open={isModalOpen}
                    handleClose={closeModal}
                    children={<h1>Post creator</h1>}
                />
            </Layout>
        </Page>
    )
}

export default Home