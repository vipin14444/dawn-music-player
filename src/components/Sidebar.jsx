import React from "react";
import "./Sidebar.scss";
import {
    MdExplore,
    MdAudiotrack,
    MdAlbum,
    MdMic,
    MdRadio,
} from "react-icons/md";
import { BiPulse } from "react-icons/bi";

const Sidebar = ({ sidebarActive, setSidebarActive }) => {
    const MENU = [
        {
            title: "Menu",
            links: [
                {
                    icon: <MdExplore />,
                    title: "Explore",
                },
                {
                    icon: <MdAudiotrack />,
                    title: "Genres",
                },
                {
                    icon: <MdAlbum />,
                    title: "Albums",
                },
                {
                    icon: <MdMic />,
                    title: "Artists",
                },
                {
                    icon: <MdRadio />,
                    title: "Radio",
                },
            ],
        },
        {
            title: "Library",
            links: [
                {
                    icon: <MdExplore />,
                    title: "Recent",
                },
                {
                    icon: <MdAudiotrack />,
                    title: "Albums",
                },
                {
                    icon: <MdAlbum />,
                    title: "Favourites",
                },
                {
                    icon: <MdMic />,
                    title: "Local",
                },
            ],
        },
        {
            title: "Playlist",
            links: [
                {
                    icon: <MdExplore />,
                    title: "Create New",
                },
                {
                    icon: <MdAudiotrack />,
                    title: "Design Flow",
                },
                {
                    icon: <MdAlbum />,
                    title: "Best of 2020",
                },
                {
                    icon: <MdMic />,
                    title: "Nigeria Jams",
                },
            ],
        },
    ];

    return (
        <div
            className={`sidebar ${
                sidebarActive ? "sidebar-active" : "sidebar-inactive"
            }`}
        >
            <div
                className="logo flex align"
                onClick={(e) => setSidebarActive(false)}
            >
                <BiPulse />
                Groovvy
            </div>
            {MENU.map((item, idx) => (
                <div key={idx} className="sidebar-link-section">
                    <h3>{item.title}</h3>
                    <ul>
                        {item.links.map((link, i) => (
                            <li
                                key={i}
                                className={`flex align ${
                                    link.title === "Explore" ? "active" : ""
                                }`}
                            >
                                {link.icon}
                                {link.title}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
