import React from "react";
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

interface Props{
    pages:Array<string>;
    handleCloseNavMenu?:()=>void;
}

const NavigationBarMobile=(props:Props)=>{

    return(
        <React.Fragment>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GIABAO
            </Typography>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box> */}
        </React.Fragment>
    )
}


export default NavigationBarMobile