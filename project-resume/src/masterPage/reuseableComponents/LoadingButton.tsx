import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


interface Props{
    onClick:any;
    loading:boolean;
    style?:any;
    title?:string;
    isDisabled?:boolean;
}
const LoadingButton=(props:Props)=>{
    const {onClick,loading,style,title} = props
    return(
        <Box sx={{ m: 1, position: 'relative',pt:3 }} style={style}>
            <Button variant="contained" onClick={onClick} disabled={loading}>
                {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                )}
                {title ? title : "Login"}
            </Button>

        </Box>
    )
}

export default LoadingButton