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
import { getUserInformation, loginUser } from "../../api/APILogin";
import {useNavigate} from 'react-router-dom';
interface Props{
  onChangeView?:(view:number)=>void;
}
const Login = (props: Props)=>{
    const [open,setOpen]= useState(false);
    const [username,setUsername]= useState("giabnguyen1@gmail.com");
    const [usernameError,setUsernameError]=useState('');
    const [password,setPassword]=useState('Rushhour2');
    const [passwordError,setPasswordError]=useState('')
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
    const navigate = useNavigate();
    const handleLogin=()=>{
        setLoading(true);
        setOpen(true);
        getUserInformation().then((res:any)=>{
          console.log(res)
        });
        loginUser({Email: username, Password:password}).then((res: any)=>{
          setSnackBarMessage('Sending Request and Hashing Password')
          return res;
        }).then((res:any)=>{
          setTimeout(()=>{  
            setSnackBarMessage(res.data);
            setLoading(false);
            navigate("/Dashboard");
            return res;
          },5000)
        })
        .catch((err: any)=>{
              // network error
              console.log("network error", err)
              setSnackBarMessage('Server side error, Error: ' + err.message);
              setLoading(false);
              return;
          
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
      const validateUsername=(input:string)=>{
          setUsername(input)
          setUsernameError('');
      }
      const validatePassword=(input:string)=>{
          setPassword(input);
          setPasswordError('')
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
                      error={usernameError ? true:false}
                      id="usernameInput"
                      label="Username / Email"
                      value={username}
                      helperText={usernameError}
                      variant="standard"
                      onChange={((e)=>validateUsername(e.target.value))}
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
                  <Box sx={{marginBottom:'1rem', width:'100%',justifyContent:'end', display:'flex'}}>
                    <Grid item xs={6} sx={{textAlign:'right'}}>
                      <LoadingButton onClick={handleLogin} loading={loading}/>
                      <Snackbar
                        open={open}
                        onClose={handleClose}
                        message={snackBarMessage}
                        action={action}
                        autoHideDuration={10000}
                      />
                    </Grid>
                  </Box>

              </Grid>
            </Box>
    )
}


export default Login;