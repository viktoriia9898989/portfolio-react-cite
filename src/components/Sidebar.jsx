import React from "react";
import {
    FaBars,
    FaEnvelope,
    FaHouseUser,
    FaStar,
    FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHouseUser />,
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />,
        },
        {
            path: "/contacts",
            name: "Contacts",
            icon: <FaEnvelope />,
        },
        {
            path: "/skills",
            name: "Skills",
            icon: <FaStar />,
        },
    ];

    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo">Логотип</h1>
                    <div className="bars">
                        <FaBars />
                    </div>
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                            activeClassName="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                </div>

                <main>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;
