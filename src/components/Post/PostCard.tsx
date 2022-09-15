import { Avatar, Card, CardHeader, CardActions, IconButton, styled, CardMedia, CardContent, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostContent from "./PostContent";

const src = require('../../assets/images/my-pic.jpg')

const CartStyled = styled(Card)(({ theme }) => ({
    width: "100%",
    maxWidth: "550px",
    backgroundColor: theme.palette.primary.main,
    margin: "0 auto 30px"
}))

const CardActionsStyled = styled(CardActions)(() => ({
    justifyContent: "space-between"
}))



const PostCard = () => {

    return <CartStyled>
        <CardHeader 
            avatar={
                <Avatar src="" alt="M" />
            }
            title="@mohamedcherif21"
            subheader="Bouaziz Mohamed Cherif"
            action={
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            }
        />

        <CardMedia 
            component="img"
            image={src}
            alt="Post"
            style={{
                maxHeight: 550,
                objectFit: 'contain'
            }}
        />


        <PostContent 
            content="This is impressive"
        />
        

        <CardActionsStyled>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
        </CardActionsStyled>

    </CartStyled>
}

export default PostCard