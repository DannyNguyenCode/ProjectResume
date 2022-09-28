import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import '../reuseableStyles/VerticalCenter.css';

const Dashboard = ()=>{
    
    return(
        <React.Fragment>     
            <NavigationBar/>
            <Grid container sx={{padding:'15%'}}>
                <Grid item xs={12}>
                    <Box  id="sideMenu" sx={
                        {

                        
                        }
                    }>
                        <Typography variant='h4' style={{paddingBottom:'1%', textDecoration:'underline'}}>
                            Objective
                        </Typography>
                        <Typography variant='body1' style={{padding:'0.2%'}}>
                            Junior Developer with 1 year experience developing with React, C#, and Microsoft SQL Server Management Studio stack for an e-commerce website.
                        </Typography>
                        <Typography variant='body1' style={{padding:'0.2%'}}>
                            Computer programmer graduate with front-end, back-end, and database skills.
                        </Typography>
                        <Typography variant='body1' style={{padding:'0.2%'}}>
                            Aiming to leverage my experience and knowledge to effectively fill the developers position at the company. 
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Footer/>   
        </React.Fragment> 
    )
}

export default Dashboard;