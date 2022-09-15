import { useState } from "react"
import { CardContent, Typography, styled } from "@mui/material";

const ShowMoreButtonStyled = styled('span')(() => ({
    fontWeight: '500',
    marginLeft: '4px',
    color: '#fff',
    cursor: 'pointer'
}))

interface IProps {
    content: string
}

const PostContent = ({ content }: IProps) => {
    
    const [contentFullLength, setContentFullLength] = useState(false);

    const toggleContentLength = () => {
        setContentFullLength(prev => !prev)
    }

    const renderContent = (): JSX.Element => {
        return content.length > 20 ? (
                <>
                    {
                        content.slice(0, contentFullLength ? content.length : 50)
                    }
                    <ShowMoreButtonStyled
                        onClick={toggleContentLength}
                    >
                        {
                            contentFullLength ? "show less" : "show more..."
                        }
                    </ShowMoreButtonStyled>
                </>
            ) : (
                <>
                    {content}
                </>
            )
    }

    return <CardContent>
        <Typography variant="body2" color="text.secondary">
            {renderContent()}
        </Typography>
    </CardContent>
}

export default PostContent;