import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink  } from 'react-router-dom';
import { AiFillProject } from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import ReactRoundedImage from "react-rounded-image";
import FaceImage from './FaceImage.jpeg';
import './sidebar.css'
import {FaBookOpen} from "react-icons/fa";
import { AiFillLinkedin, AiOutlineMail,AiOutlineTwitter,AiFillContacts} from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { BsSpotify } from 'react-icons/bs';
const Sidebar = () => {


 
  return (
    
    <div className='sideBar'  style={{ position:'fixed', height: "100%", bottom:"0%", zIndex:"2"}}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Coming+Soon&family=Darker+Grotesque:wght@600&family=Cutive+Mono&family=Sacramento&display=swap');
      </style>
      <CDBSidebar textColor="#fff" backgroundColor="#1A1A1A" className="DBSsidebar" >
        <CDBSidebarHeader>
        <div className="image-position">
        <ReactRoundedImage image={FaceImage} 
          roundedSize="4" 
          imageWidth="90" 
          imageHeight="90"
          roundedColor="#aeaeae"
          hoverColor="#E6E6E6"
          />
        </div>
      
    


          <div className = "name">
            Dante Miller
          </div>

          <div className = "intro">
          Aspiring Machine Learning Engineer | CS PhD Student @ Rice University
          </div>
        
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu className="sidebarMenu">
        
            <li>
            <NavLink className={({ isActive }) => 
                      (isActive ? "link" : "")} to="/aboutme" >
              <CDBSidebarMenuItem className = "aboutmetab"> 
                <BsFillPersonFill /> About Me
              </CDBSidebarMenuItem>
            </NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => 
                      (isActive ? "link" : "")} to="/resume" >
              <CDBSidebarMenuItem  className = "resumetab">
                <FaBookOpen /> Resume
                </CDBSidebarMenuItem>
            </NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => 
                      (isActive ? "link" : "")} to="/project" 
            >
              <CDBSidebarMenuItem className = "projecttab">
                <AiFillProject /> Projects
              </CDBSidebarMenuItem>
            </NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => 
                      (isActive ? "link" : "")} to="/paper" 
            >
              <CDBSidebarMenuItem className = "papertab">
                <AiFillProject /> Papers
              </CDBSidebarMenuItem>
            </NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => 
                      (isActive ? "link" : "")} to="/contact" >
              <CDBSidebarMenuItem className = "contacttab">
                <AiFillContacts /> Contact
              </CDBSidebarMenuItem>
            </NavLink>
            </li>
          </CDBSidebarMenu>
        </CDBSidebarContent>
    <div className='contactinfo' >
      <a className="spotifylink" href="/project/spotify"><BsSpotify /></a> 
      <a className="githublink" href='https://github.com/dantemillerds' ><GoMarkGithub /></a>
      <a className="twitterlink" href='https://twitter.com/dmill666'><AiFillLinkedin /></a>
      <a className="linkedinlink" href='https://www.linkedin.com/in/dante-miller-1a9396228/'><AiOutlineTwitter /></a>
      <a className="emailink" href="javascript:location.href = 'mailto:' + ['dm85','rice.edu'].join('@')"><AiOutlineMail /></a> 
    </div>    
    <span className="createdby">
      Made with <i className="heart">
        <FaHeart/>
      </i> by Dante Miller
     </span>
     
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