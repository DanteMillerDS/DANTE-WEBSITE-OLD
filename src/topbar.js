import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './topbar.css'
export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed" style={{ background: 'rgb(95, 95, 124', width:"140%",height:"6%", zIndex:"1"}}>
        <Toolbar>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}


