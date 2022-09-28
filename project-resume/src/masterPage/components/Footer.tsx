import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import AddIcCallIcon from '@mui/icons-material/AddIcCall'; 
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Link } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { onClickFooterIcons } from "../../app/reduxFeatures/footerState";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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
    const [openGithub,setOpenGithub]= React.useState(false);
    const [openLinkedIn,setOpenLinkedIn]= React.useState(false);
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
    const handleCloseGithub=()=>{
        setOpenGithub(false);
        dispatch(onClickFooterIcons(null));
    }
    const handleOpenGithub=()=>{
        setOpenGithub(true)
    }
    const handleCloseLinkedIn=()=>{
      setOpenLinkedIn(false);
      dispatch(onClickFooterIcons(null));
  }
  const handleOpenLinkedIn=()=>{
      setOpenLinkedIn(true)
  }
    const footerStateValue = useAppSelector((state)=>state.footerState.value)
    const dispatch = useAppDispatch();
    
    const handleOnClick=(_value:number | any)=>{
        dispatch(onClickFooterIcons(_value))
        if(_value === 0){
            handleOpenGithub();
        }else if(_value === 1){
            handleOpenEmail(); 
        }else if(_value === 2){
            handleOpenPhone();
        }
        else if(_value === 3){
          handleOpenLinkedIn()
        }
        else{
            handleClosePhone();
            handleCloseEmail();
            handleCloseLinkedIn();
            handleCloseGithub()
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
                <BottomNavigationAction label="Github Portfolio" icon={<GitHubIcon />} />
                <BottomNavigationAction label="Email" icon={<EmailIcon />} />
                <BottomNavigationAction label="Phone" icon={<AddIcCallIcon />} />
                <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
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
            <Modal open={openGithub} onClose={handleCloseGithub}>
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Github Portfolio
                  </Typography>
                  <Link href="https://github.com/DannyNguyenCode/ProjectResume" variant="body2" target={'_blank'}>
                    https://github.com/DannyNguyenCode/ProjectResume
                  </Link>
                </Box>
            </Modal>
            
            <Modal open={openLinkedIn} onClose={handleCloseLinkedIn}>
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    LinkedIn
                  </Typography>
                  <Link href="https://www.linkedin.com/in/gia-bao-danny-nguyen/" variant="body2" target={'_blank'}>
                      https://www.linkedin.com/in/gia-bao-danny-nguyen/
                  </Link>
                </Box>
            </Modal>
        </Grid>
    )
}

export default Footer