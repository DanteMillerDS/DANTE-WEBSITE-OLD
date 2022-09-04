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
import {FaBookOpen} from "react-icons/fa";
import { AiFillLinkedin, AiOutlineMail,AiOutlineTwitter,AiFillContacts} from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className='sideBar'  style={{ position:'fixed', height: "100%", bottom:"0%", zIndex:"2"}}>
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
            <NavLink exact to="/resume" activeClassName="activeClicked">
              <CDBSidebarMenuItem className = "resumetab">
                <FaBookOpen /> Resume
                </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/calculator" activeClassName="activeClicked">
              <CDBSidebarMenuItem className = "calculatortab">
                <AiFillCalculator /> Calculator
              </CDBSidebarMenuItem>
            </NavLink>

          
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem className = "contacttab">
                <AiFillContacts /> Contact
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
    <div className='contactinfo' >
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