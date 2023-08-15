import { Box, Divider, Fade, Modal, Typography } from "@mui/material";
import { Formik } from "formik";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px',

};


interface props {
    children: JSX.Element | JSX.Element[]
    title: string
    show: boolean
    setShow: (value: boolean) => void,
}
export const ModalForm = ({ children, title = '', show, setShow }: props) => {
    const handleClose = () => setShow(false);
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={show}
            onClose={handleClose}
            closeAfterTransition
            slotProps={{ backdrop: { timeout: 500 } }}

        >
            <Fade in={show} >
                <Box sx={style}>
                    <Typography id="transition-modal-title" display='flex' justifyContent='center' variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Divider />
                    <Box>

                        {children}

                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}
