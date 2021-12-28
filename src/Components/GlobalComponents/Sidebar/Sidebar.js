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
import { Accordion, Card } from "react-bootstrap";
import RouteStrings from '../../../routers/routingString';
const Sidebar = () => {
    const [yebosafearrow, setYebosafearrow] = useState(false);
    const [yebotrackarrow, setYebotrackarrow] = useState(false);


    const handleClick = () => {
        console.log("clicked")
        setYebosafearrow(!yebosafearrow)
        // setEventKey("0")
    }
    const handleBackClick = (event) => {
        console.log("clicked");
        setYebotrackarrow(!yebotrackarrow);
        // setEventKey("1")
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
            to: RouteStrings.manageguards,
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
    const trackdata = [
        {
            Id: 1,
            Name: 'Organization',
            MenuIcon: OrganizationIcon,
            // to: `organizations`,
            to: RouteStrings.organizations,
        },
        {
            Id: 2,
            Name: 'Employee',
            MenuIcon: Profile,
            // to: `employeedetailsupload`,
            to: RouteStrings.employeedetailsupload,
        },
        {
            Id: 3,
            Name: 'Manage Agencies',
            MenuIcon: ManageAgencies,
            // to: `/manageagencies`,
            to: RouteStrings.manageagencies,
        },
        {
            Id: 4,
            Name: 'Guards',
            MenuIcon: ManageGuards,
            // to: `/manageguards`,
            to: RouteStrings.manageguards,
        },
        {
            Id: 5,
            Name: 'Feedbacks',
            MenuIcon: FeedbackIcon,
            // to: `/feedbacks`,
            to: RouteStrings.feedbacks,
        },
        {
            Id: 6,
            Name: 'Helpdesk',
            MenuIcon: InformationIcon,
            // to: `employeedetails`,
            to: RouteStrings.employeedetails,
        },

        {
            Id: 7,
            Name: 'Driver',
            MenuIcon: DriverIcon,
            // to: `driverdetails`,
            to: RouteStrings.driverdetails,
        },
    ]
    const agencydata = [
        {
            Id: 1,
            Name: 'Fleet Agencies',
            MenuIcon: FleetAgenciesIcon,
            // to: `/manageagencies`,
            to: RouteStrings.manageagencies,
        },
        {
            Id: 2,
            Name: 'guardagencies',
            MenuIcon: GuardAgenciesIcon,
            // to: `/manageagencies`,
            to: RouteStrings.guardagencies,
        },
    ]

    return (
        <>
      
            <div className="sidebar_fullmenu">

                <div className="sidebar-logo">
                    <img src={Logo} alt="mainlogo" />
                </div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            onClick={handleClick}
                        >
                            <div className="sidebar_heading">
                                <img src={SOSIcon} alt="profile" />
                                <h3> Yebo Safe</h3>
                                {!yebosafearrow ?
                                    <img src={SideArrow} alt="" /> :
                                    <img src={UpArrow} alt="" />}
                            </div>
                        </Accordion.Toggle >
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {safedata.map((item) => {
                                    return (
                                        <NavLink 
                                            // to={item.to} 
                                            // className="nav_linking" 
                                            // activeClassName='nav_links_active'
                                        >
                                            <div 
                                                className="nav_linking" 
                                                key={item.ID}>
                                                    <img src={item.MenuIcon} alt="profile" />
                                                    <div className="menu_text">
                                                        <a>{item.Name}</a>
                                                    </div>
                                            </div>
                                        </NavLink>
                                    )
                                }
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
          
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={handleBackClick}>
                            <div className="sidebar_heading">
                                <img src={RTrackIcon} alt="profile" />
                                <h3>Yebo Track</h3>
                                {!yebotrackarrow ?
                                    <img src={SideArrow} alt="" /> :
                                    <img src={UpArrow} alt="" />}
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {trackdata.map((item) => {
                                    if (item.Name === "Manage Agencies") {
                        
                                        return (
                                            <>
                                                <Accordion defaultActiveKey="0">
                                                    <Card>
                                               
                                                        <Accordion.Toggle
                                                            as={Card.Header}
                                                            eventKey="0"
                                                            onClick={handleClick}
                                                        >
                                                            <div className="sidebar_subheading">
                                                                <img src={ManageAgencies} alt="profile" />
                                                                <h3>Agencies </h3>
                                                                {!yebosafearrow ?
                                                                    <img src={SideArrow} alt="" /> :
                                                                    <img src={UpArrow} alt="" />}
                                                            </div>
                                                        </Accordion.Toggle >
                                                        {/* </Card.Header> */}
                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body>
                                                                {agencydata.map((item) => {
                                                                    return (
                                                                        <NavLink 
                                                                            to={item.to}
                                                                            //  className="nav_linking manage_Agencies-subheading" activeClassName='nav_links_active'
                                                                        >
                                                                            <div 
                                                                                className="nav_linking" 
                                                                                key={item.ID}
                                                                            >
                                                                                <img src={item.MenuIcon} alt="profile" />
                                                                                <div className="menu_text">
                                                                                    <a>{item.Name}</a>
                                                                                </div>
                                                                            </div>
                                                                        </NavLink>
                                                                    )
                                                                }
                                                                )}
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Accordion>
                                       
                                            </>
                                        )
                                    }
                                    else {
                                        return (
                              
                                            <NavLink 
                                                to={item.to} 
                                                // className="nav_linking " activeClassName='nav_links_active'
                                                >
                                                <div className="nav_linking" key={item.ID}>
                                                    <img src={item.MenuIcon} alt="profile" />
                                                    <div className="menu_text">
                                                        <a>{item.Name}</a>
                                                    </div>
                                                </div>
                                            </NavLink>
                                   
                                        )
                                    }

                                }
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div>
        </>
    )
}

export default Sidebar
