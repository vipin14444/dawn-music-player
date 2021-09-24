import React from "react";
import "./Header.scss";
import { FaBell, FaCog } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = ({ sidebarActive, setSidebarActive }) => {
    return (
        <header className="header flex align">
            <FiMenu
                className="icon-btn btn-menu"
                onClick={(e) => setSidebarActive(true)}
            />
            <div className="user-action-container flex align">
                <FaBell className="icon-btn" />
                <FaCog className="icon-btn" />
                <div className="user-info-container flex align">
                    <div className="dp-container flex f-center">
                        <img
                            src={`https://randomuser.me/api/portraits/men/52.jpg`}
                            alt="dp"
                        />
                    </div>
                    <div className="name">Dave Cooper</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
