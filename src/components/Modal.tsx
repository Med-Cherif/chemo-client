import { Backdrop, Paper } from "@mui/material";

interface IProps {
    open: boolean
    children: React.ReactNode
    handleClose: (e: any) => void
}

const Model = ({ open, handleClose, children }: IProps) => {
    return <Backdrop
        sx={{
            zIndex: (theme) => theme.zIndex.modal
        }}
        id="modal"
        open={open}
        onClick={handleClose}
    >
        <Paper>
            {children}
        </Paper>
    </Backdrop>
}

export default Model;