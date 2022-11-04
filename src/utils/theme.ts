import { createTheme } from "@mui/material";
import gray from "@mui/material/colors/grey"

const theme = createTheme({
    components: {
    },
    palette: {
        primary: {
            main: '#141527',
            contrastText: "#000",
        },
        secondary: {
            main: "#868799"
        },
        background: {
            default: '#323443',
        },
        text: {
            primary: '#000',
            secondary: "#868799",
            dark: '#000'
        },
    },
})

export default theme

// 