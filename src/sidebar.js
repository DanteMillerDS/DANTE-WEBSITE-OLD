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

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>

            
            Dante Miller
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/aboutme" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">About Me</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/app" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">app</CDBSidebarMenuItem>
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