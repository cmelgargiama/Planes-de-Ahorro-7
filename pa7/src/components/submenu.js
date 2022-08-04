import { Dropdown } from "bootstrap";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";






const SubMenu = ({item}) =>{
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
     

    return(
        <>
       
        <div  className="sidebarLink">
      
            <div>
                <label className="sidebarLabel">{item.title}</label>
            </div>
            <div className="svg"  onClick={item.subNav && showSubnav}>
                {item.subNav && subnav 
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                : null}
            </div>
            
        </div>
        {subnav && item.subNav.map((item, index)=>{
            return(
                <Link to={item.path} key={index} className={item.class}  >
                    <label className="sidebarLabel">{item.title}</label>
                </Link>
                
                )
        })}
        </>
    );

}

export default SubMenu