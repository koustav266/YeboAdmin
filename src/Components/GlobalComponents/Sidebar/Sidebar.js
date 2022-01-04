import React, { useState } from 'react'
import "./Sidebar.scss"

import Logo from "../../../Assets/Images/Yebo_logo.png";
import Profile from "../../../Assets/Icons/Profile.png";
// import VehicleIcon from "../../../Assets/Icons/Vehicle_icon.png";
import ManageGuards from "../../../Assets/Icons/Manage_Guards.png";
import ManageAgencies from "../../../Assets/Icons/Manage_Agencies.png";
import FeedbackIcon from "../../../Assets/Icons/Feedback_Icon.png";
import InformationIcon from "../../../Assets/Icons/Information_icon.png";
import OrganizationIcon from "../../../Assets/Icons/Organiztaion_Icon.png";
// import EmployeeIcon from "../../../Assets/Icons/Employee_Icon.png";
import DriverIcon from "../../../Assets/Icons/Driver_Icon.png";
import SideArrow from "../../../Assets/Icons/Side_Arrow.png";
import UpArrow from "../../../Assets/Icons/Up_Arrow.png";
import SOSIcon from "../../../Assets/Icons/SOS_Icon.png";
import RTrackIcon from "../../../Assets/Icons/RTrack_Icon.png";
import FleetAgenciesIcon from "../../../Assets/Icons/Fleet_Agencies_Icon.png";
import GuardAgenciesIcon from "../../../Assets/Icons/Guard_Agencies_Icon.png";
// import Settings from "../../../Assets/Icons/Settings.png";
import { NavLink } from 'react-router-dom';
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import RouteStrings from '../../../routers/routingString';

function CustomToggle({ children, eventKey }) {
 
    const decoratedOnClick = useAccordionButton(eventKey, (event) =>{
      console.log(event.currentTarget, eventKey)
    }
    );
  
    return (
      <button
        type="button"
        value={eventKey}
        style={{ 
            width: "100%",
            height: "3.5rem",
            border: "none",
            background: "transparent",
        }}
        onClick={decoratedOnClick}
      >
        {children}
    
      </button>
    );
  }
  
  function Sidebar() {
    const [yebosafearrow, setYebosafearrow] = useState([false, false, false]);
    const handleClick = (element) => {
        if(yebosafearrow[element]){
            setYebosafearrow([false, false, false])
        }else{
            let arr = [false, false, false];
            arr[element] = true;
            console.log(arr)
            setYebosafearrow(arr);
        }
      
    }
    const safedata = [
        {
            Id: 1,
            Name: 'Manage users',
            MenuIcon: Profile,
            // to: `/manageuser`,
            to: RouteStrings.manageusers,
        },
        {
            Id: 2,
            Name: 'Manage Agencies',
            MenuIcon: ManageAgencies,
            // to: `/manageagencies`,
            to: RouteStrings.manageagencies,
        },
        {
            Id: 3,
            Name: 'Manage Guards',
            MenuIcon: ManageGuards,
            // to: `/manageguards`,
            to: RouteStrings.manageGuards,
        },
        {
            Id: 4,
            Name: 'Feedbacks',
            MenuIcon: FeedbackIcon,
            // to: `/feedbacks`,
            to: RouteStrings.feedbacks,
        },
        {
            Id: 5,
            Name: 'Helpdesk',
            MenuIcon: InformationIcon,
            // to: `employeedetails`,
            to: RouteStrings.employeedetails,
        },
    ]
    return (
        <div className="sidebar_fullmenu">
            <div className="sidebar-logo">
                <img src={Logo} alt="mainlogo" />
            </div>
            <Accordion defaultActiveKey="0">
                <Card style={{
                    background: "transparent",
                    border: "none"
                }}>
                <Card.Header 
                    style={{ 
                        padding: "0px",
                        border: "none",
                        background: "transparent"
                    }}>
                    <CustomToggle eventKey="0" style={{background: "transparent"}}>
                        <div className="sidebar_heading" onClick={() => handleClick(0)}>
                            <img src={SOSIcon} alt="profile" />
                            <h3> Yebo Safe</h3>
                            {yebosafearrow[0]?
                                <img src={SideArrow} alt="" /> :
                                <img src={UpArrow} alt="" />}
                        </div>
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {safedata.map((item, index)=>{
                            return(
                                <NavLink 
                                    to={item.to}
                                    key={index}
                                >
                                    <div 
                                        className="nav_linking" 
                                        key={item.ID}
                                    >
                                        <img src={item.MenuIcon} alt="profile" />
                                        <div className="menu_text">
                                            <span>{item.Name}</span>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                            
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card style={{
                    background: "transparent",
                    border: "none"
                }}>
                <Card.Header
                     style={{ 
                        padding: "0px",
                        border: "none"
                    }}>
                    <CustomToggle eventKey="1">
                    <div className="sidebar_heading"  onClick={() => handleClick(1)}>
                            <img src={SOSIcon} alt="profile" />
                            <h3> Yebo Safe</h3>
                            {yebosafearrow[1]?
                                <img src={SideArrow} alt="" /> :
                                <img src={UpArrow} alt="" />}
                        </div>
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card style={{
                    background: "transparent",
                    border: "none"
                }}>
                <Card.Header
                 style={{ 
                    padding: "0px",
                    border: "none"
                }}>
                    <CustomToggle eventKey="2">
                    <div className="sidebar_heading" onClick={() => handleClick(2)}>
                            <img src={SOSIcon} alt="profile" />
                            <h3> Yebo Safe</h3>
                            {yebosafearrow[2]?
                                <img src={SideArrow} alt="" /> :
                                <img src={UpArrow} alt="" />}
                        </div>
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
  }
  


export default Sidebar;