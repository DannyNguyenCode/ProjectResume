import React,{useState} from "react";
import { Grid, ThemeProvider, Typography } from "@mui/material";

import Snackbar from '@mui/material/Snackbar';
import '../reuseableStyles/VerticalCenter.css'
import IconButton from '@mui/material/IconButton';
import {TextField} from "@mui/material";
import './Login.css'
import LoadingButton from "../reuseableComponents/LoadingButton";
import {Box} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { updateUserPassword } from "../../api/APILogin";

interface Props{
  onChangeView?:(view:number)=>boolean;
}
const Login = (props: Props)=>{
    const [open,setOpen]= useState(false);
    const [password,setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('')
    const [passwordError,setPasswordError]=useState('')
    const [email,setEmail]=useState('');
    const [loading,setLoading]= useState(false);
    const [snackBarMessage,setSnackBarMessage]=useState<string>('')

    const responsiveTypography = createTheme();
    responsiveTypography.typography.h3 = {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      [responsiveTypography.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    };

    const onClickGoForth=()=>{

        setLoading(true);
        setOpen(true);

        updateUserPassword({Email: email, Password:confirmPassword}).then((res:any)=>{
            setLoading(false);
            setSnackBarMessage(res.data)
            return res;
        }).catch((err: any)=>{
            setLoading(false);
            console.log("err",err);
            return err;
        })
    }

    
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }  
        setOpen(false);
      };
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
          </IconButton>
        </React.Fragment>
      );

      const validatePassword=(input:string)=>{
          setPassword(input);
          setPasswordError('')
      }
      const validateConfirmPassword=(input:string)=>{
        setConfirmPassword(input);

      }
    return(
            <Box id="loginWrapper" sx={{ width: '55%' }}>
              <Grid spacing={{xs:4,sm:1, md:3}} container>
                  <Box sx={{paddingTop:'1rem', width:'100%'}}>
                      <Grid item xs={12} textAlign="center">
                          <ThemeProvider theme={responsiveTypography}>
                              <Typography variant="h3">
                                  Gia Bao's Resume
                              </Typography>
                          </ThemeProvider>
                      </Grid>
                  </Box>
                  <Grid item xs={12}>
                    <TextField
                      id="forgotPasswordEmailInput"
                      label="Email"
                      value={email}
                      variant="standard"
                      onChange={(e)=>setEmail(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      error={passwordError ? true:false}
                      id="passwordInput"
                      label="Password"
                      type={'password'}
                      value={password}
                      helperText={passwordError}
                      variant="standard"
                      onChange={((e)=>validatePassword(e.target.value))}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={passwordError ? true:false}
                      id="confirmPasswordInput"
                      label="Confirm Password"
                      type={'password'}
                      value={confirmPassword}
                      helperText={passwordError}
                      variant="standard"
                      onChange={((e)=>validateConfirmPassword(e.target.value))}
                      fullWidth
                    />
                  </Grid>
                  <Box sx={{marginBottom:'1rem', width:'100%',justifyContent:'space-evenly', display:'flex'}}>
                  <Grid item xs={6} sx={{textAlign:'left', paddingLeft:'1rem'}}>
                      <LoadingButton onClick={onClickGoForth} title={"Forgot Password"} loading={loading}/>
                      <Snackbar
                        open={open}
                        onClose={handleClose}
                        message={snackBarMessage}
                        action={action}
                      />
                    </Grid>
                    <Grid item xs={6} sx={{textAlign:'right'}}>
                      <LoadingButton onClick={onClickGoForth} title={"Change Password"}  loading={loading}/>
                      <Snackbar
                        open={open}
                        onClose={handleClose}
                        message={snackBarMessage}
                        action={action}
                      />
                    </Grid>
                  </Box>

              </Grid>
            </Box>
    )
}


export default Login;