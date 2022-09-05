import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './playbar.css'

export default function Playbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="playbar"  position="fixed"  style={{ background: "rgba(35, 43, 56, .9)", width:"140%",height:"6%", zIndex:"1"}}>
          <span>
            
          </span>
          <Toolbar>
            
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
  