import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Grid} from '@mui/material';
import '../reuseableStyles/VerticalCenter.css';
const Dashboard = ()=>{
    const onClickSkills=()=>{
        console.log("insert skills component view to open - create redux to change between skills, education, employment")
    }
    return(
        <React.Fragment>     
        <NavigationBar/>
        <Grid container>
            <Grid item xs={1}>
                <Box  id="sideMenu" sx={
                    {
                        flexDirection:'column',
                        border: '1px solid',
                        display:'flex',
                    }
                }>
                    <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea onClick={onClickSkills}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Skills</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Education</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Employment</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={11}></Grid>
        </Grid>
        <Footer/>   
</React.Fragment> 
    )
}

export default Dashboard;