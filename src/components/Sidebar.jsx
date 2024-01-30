import React, { useState } from "react";
import {
    FaBars,
    FaHouseUser,
    FaLaptop,
    FaStar,
    
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHouseUser />,
        },
        
        {
            path: "/project",
            name: "Project",
            icon: <FaLaptop />,
        },
        {
            path: "/skills",
            name: "Skills",
            icon: <FaStar />,
        },
    ];

    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "45px"}} className="sidebar">
                <div className="top_section">
                    <div  style={{display: isOpen ? "block" : "none"}} className="logo">ProfolioSite</div>
                    <div style={{marginLeft: isOpen ? "45px" : "0px"}} className="bars">
                        <FaBars  onClick={toggle}/>
                    </div>
                </div>
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                            activeClassName="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div  style={{display: isOpen ? "block" : "none"}}className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
               
               </div>
                <main>{children}</main>
            
        </div>
    );
};

export default Sidebar;
