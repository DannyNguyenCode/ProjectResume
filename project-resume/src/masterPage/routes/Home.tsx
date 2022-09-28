import React,{useState} from "react";
import { Grid } from "@mui/material";
import LoadingPage from "../reuseableComponents/LoadingPage";
import Login from "../components/Login";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Home.css'
import { Box } from "@mui/system";
import ForgotPassword from '../components/ForgotPassword';
interface Props{

}
const Home = (props: Props)=>{

    const [loadingCounter,setLoadingCounter]=useState(0);
    const [changeView, setChangeView]= useState(0);
    const lightTheme = createTheme({ 
        palette: { mode: 'light' },
     
    });
    const onChangeView = (view: number)=>{
        if(view === 0){
            setChangeView(0);
        }else if(view === 1){
            setChangeView(1);
        }else{
            setChangeView(0);
        }
    }
    const getLoadingPage=()=>{
        return(
            <Grid container className="parentStyle">
                <Grid item xs={12} className="childStyle" textAlign="center">
                    <LoadingPage setLoadingCounter={setLoadingCounter}/>
                </Grid>
            </Grid>  
        )
    }
    const getLoginPage=()=>{
        if(changeView === 1){
            return(
                <ThemeProvider theme={lightTheme}>
                    <Box id="contentWrapper">
                        <Box id="paper">
                            <Grid container className="parentStyle">
                                <Grid item xs={12} className="childStyle" textAlign="center">                                
                                    <ForgotPassword/>      
                                </Grid>
                            </Grid>              
                        </Box>
                    </Box>
                </ThemeProvider>
            )
        }else{
            return(
                <ThemeProvider theme={lightTheme}>
                    <Box id="contentWrapper">
                        <Box id="paper">
                            <Grid container className="parentStyle">
                                <Grid item xs={12} className="childStyle" textAlign="center">                                
                                    <Login onChangeView={onChangeView}/>      
                                </Grid>
                            </Grid>              
                        </Box>
                    </Box>
                </ThemeProvider>
            )
        }


    }
    return(
        <React.Fragment>     
                <NavigationBar isLoggedIn={true}/>
                {loadingCounter !==1?getLoadingPage():getLoginPage()}  
                <Footer/>   
        </React.Fragment>     
    )
}

export default Home;