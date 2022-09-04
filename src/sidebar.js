import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { AiFillCalculator } from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import ReactRoundedImage from "react-rounded-image";
import FaceImage from './FaceImage.jpeg';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '20vw', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#1A1A1A">
        <CDBSidebarHeader>
        <div className="image-position">
        <ReactRoundedImage image={FaceImage} 
          roundedSize="4" 
          imageWidth="90" 
          imageHeight="90"
          roundedColor="#5A5A5A"
          hoverColor="#E6E6E6"
          />
        </div>
      
    


          <div class = "name">
            Dante Miller
          </div>

          <div class = "intro">
          Aspiring Machine Learning Engineer | CS PhD Student @ Rice University
          </div>
        
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
            <NavLink exact to="/aboutme" activeClassName="activeClicked">
              <CDBSidebarMenuItem className = "aboutmetab"> 
                <BsFillPersonFill /> About Me
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/app" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <AiFillCalculator /> Calculator
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/resume" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Resume</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/contactinformation" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Contact</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;