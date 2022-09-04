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

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader>

        <div style={{ display: "flex" }}>
        <ReactRoundedImage image={FaceImage} roundedSize="0" imageWidth="110" imageHeight="110" />
      
      
      </div>



          <p>
            Dante Miller
          </p>

          <p>
          Aspiring Machine Learning Engineer | CS PhD Student @ Rice University
          </p>
        
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
            <NavLink exact to="/aboutme" activeClassName="activeClicked">
              <CDBSidebarMenuItem > 
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