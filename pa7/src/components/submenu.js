import { Dropdown } from "bootstrap";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";






const SubMenu = ({item}) =>{
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
     

    return(
        <>
        <Link to={item.path}  onClick={item.subNav && showSubnav} className="sidebarLink">
            <div>
                <label className="sidebarLabel">{item.title}</label>
            </div>
            <div>
                {item.subNav && subnav 
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                : null}
            </div>
        </Link>
        {subnav && item.subNav.map((item, index)=>{
            return(
                <Link to={item.path} key={index} className="dropdown-link" >
                    <label className="sidebarLabel">{item.title}</label>
                </Link>
                
                )
        })}
        </>
    );

}

export default SubMenu