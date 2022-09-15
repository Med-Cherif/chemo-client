import { useEffect, useRef } from 'react';
import { Box, TextField, styled, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const TextFieldStyled = styled(TextField)(() => ({
    '& *': {
        outline: 'none !important',
        border: 'none !important'
    },
    '& .css-6np9ws-MuiInputBase-root-MuiOutlinedInput-root': {
        height: '40px'
    }
}))


interface IProps {
    openSearchContent: (element: HTMLElement) => void
}

const SearchBox = ({ openSearchContent }: IProps) => {

    const searchBoxRef = useRef<HTMLDivElement | null>(null);

    const handleClick = () => {
        if (!searchBoxRef.current) return;
        openSearchContent(searchBoxRef.current)
    }

    return (
        <Box 
            ref={searchBoxRef} 
            onClick={handleClick}
            sx={{ bgcolor: 'background.default', }}
        >
            <TextFieldStyled  
                fullWidth
                placeholder='Search'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#fff' }} />
                        </InputAdornment>
                    )
                }}
            />
        </Box>
        
    )
}

export default SearchBox