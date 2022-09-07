import React,{useEffect} from "react";
import '../reuseableStyles/VerticalCenter.css'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
interface Props{
    setLoadingCounter:(counter: number)=>void;
}
const LoadingPage=(props:Props)=>{
    const {setLoadingCounter} = props;
    const [progress, setProgress] = React.useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) =>{ 
            if(prevProgress >= 99.99){     
                return 0;
            }else{
                return prevProgress + 33.33;
            }
        });
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(()=>{
        if(progress >= 99.99){
            setTimeout(()=>{
                setLoadingCounter(1)
            },800)
          
        }
    },[progress, setLoadingCounter])

    return(
        <Box sx={{ width: '40%' }}>
            <div style={{paddingBottom:'2rem'}}>Loading Page . . .</div>
            <LinearProgress variant="determinate" value={progress} />
        </Box>
    )
}

export default LoadingPage