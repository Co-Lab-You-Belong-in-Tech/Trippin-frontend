import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


import {IoIosCheckmarkCircleOutline} from 'react-icons/io';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #225C47',
  boxShadow: 24,
  pt: 2,
  pb:2,
  pl:4,
  pr:4
};

type porpsType = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function TransitionsModal({open, setOpen}: porpsType) {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IoIosCheckmarkCircleOutline size={18} color="#225C47"/>
            <Typography id="transition-modal-description" sx={{ ml: 1,color:"#225C47" }}>
                    Your itinerary was successfully saved.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
