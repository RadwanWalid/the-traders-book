import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Assets/CSS/Component Style/Sidebar.css";
import { FaBars } from "react-icons/fa";

function Sidebar({children}) {

    const contents = [
        {
            num: 1,
            name: "Market Analysis"
        },
        {
            num: 2,
            name: "Stock Report"
        },
        {
            num: 3,
            name: "Build Your Own Portfolio"
        },
        {
            num: 4,
            name: "Market Screener"
        },
        {
            num: 5,
            name: "Today's Picks"
        },
        {
            num: 6,
            name: "Weekly Portfolio"
        },
        {
            num: 7,
            name: "Monthly Portfolio"
        },
    ];

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    window.onload = toggleSideBar;
    window.onresize = toggleSideBar;

     function toggleSideBar() {
        if(window.innerWidth < 989) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className="ctr">
            <div id='sidebar' style={{width: isOpen ? "360px" : "75px"}}>
                <div style={{display: isOpen ? "inline" : "block", width: "100%", height: "50px"}}>
                    <h1 id='title' style={{left: isOpen ? "-15px" : "-200px"}}>CONTENTS</h1>
                    <div id='T-tail' style={{left: isOpen ? "155.5px" : "-30px"}}></div>
                    <div className="bars" onClick={toggle} style={{right: isOpen ? "25px" : "30px"}} >
                        <FaBars />
                    </div>
                </div>
                <div style={{paddingTop: "10px"}}>
                    <p id="sub-title" style={{left: isOpen ? "0px" : "-150px"}}>CHAPTERS</p>
                    <div style={{float: "right"}}>
                        {contents.map((item, index) => (
                            <a className="chptr-link" href={"/" + item.name.replace(" ", "")} key={index}>
                               <h6 className="chptr-num" style={{left: isOpen ? "0px" : "170px"}}>{item.num}</h6>
                                <h6 className="chptr-title" style={{left: isOpen ? "0px" : "-70px"}}>{item.name}</h6>
                            </a>
                        ))}
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;