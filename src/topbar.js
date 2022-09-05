import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './topbar.css'
export default function Topbar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appBar"  position="fixed" style={{ background: 'rgb(42, 48, 88)', width:"140%",height:"6%", zIndex:"1"}}>
     
        <Toolbar>
          
        </Toolbar>
      
      </AppBar>
    </Box>
  );
}


