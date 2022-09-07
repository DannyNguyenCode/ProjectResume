import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcCallIcon from '@mui/icons-material/AddIcCall'; 
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Grid } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { onClickFooterIcons } from "../../app/reduxFeatures/footerState";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = ()=>{
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [openEmail, setOpenEmail] = React.useState(false);
    const [openPhone, setOpenPhone] = React.useState(false);
    const [openFeedback,setOpenFeedback]= React.useState(false);
    const handleOpenEmail = () => {
        setOpenEmail(true)
    };
    const handleCloseEmail = () => {
        setOpenEmail(false);
        dispatch(onClickFooterIcons(null));
    };
    const handleOpenPhone = () => {
        setOpenPhone(true)
    };
    const handleClosePhone = () => {
        setOpenPhone(false);
        dispatch(onClickFooterIcons(null));
    };
    const handleCloseFeedback=()=>{
        setOpenFeedback(false);
        dispatch(onClickFooterIcons(null));
    }
    const handleOpenFeedback=()=>{
        setOpenFeedback(true)
    }
    const footerStateValue = useAppSelector((state)=>state.footerState.value)
    const dispatch = useAppDispatch();
    
    const handleOnClick=(_value:number | any)=>{
        dispatch(onClickFooterIcons(_value))
        if(_value === 0){
            handleOpenFeedback();
        }else if(_value === 1){
            handleOpenEmail(); 
        }else if(_value === 2){
            handleOpenPhone();
        }
        else{
            handleClosePhone();
            handleCloseEmail();
        }
     
    }

    return(
        <Grid item xs={12} style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation
                showLabels
                value={footerStateValue}
                onChange={(event, newValue) => {
                    handleOnClick(newValue)
      
                }}
                // sx={{
                //     height:'7%'
                // }}
            >
                <BottomNavigationAction label="Feedback" icon={<FeedbackIcon />} />
                <BottomNavigationAction label="Email" icon={<EmailIcon />} />
                <BottomNavigationAction label="Phone" icon={<AddIcCallIcon />} />
            </BottomNavigation>
            <Modal
              open={openEmail}
              onClose={handleCloseEmail}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Email
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    gbnguyenw@gmail.com
                  </Typography>
                </Box>
            </Modal>
            <Modal
              open={openPhone}
              onClose={handleClosePhone}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Phone
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    647 760 3458
                  </Typography>
                </Box>
            </Modal>
            <Dialog open={openFeedback} onClose={handleCloseFeedback}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseFeedback}>Cancel</Button>
                  <Button onClick={handleCloseFeedback}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Footer