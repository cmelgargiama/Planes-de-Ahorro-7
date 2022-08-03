import React,  {useState, useContext} from 'react'
import { BiAlignMiddle,
    BiBus,BiListPlus, BiFile, BiTimeFive, BiPhoneCall,
     BiIdCard, BiGroup, BiCog, BiLineChart, BiPrinter,
      BiTachometer, BiLinkExternal, BiCart, BiCar, BiLock, BiMenu, BiUpArrow, BiDownArrow
 } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import SubMenu from './submenu';
import {masterItem, operacionesItem} from "./sidebarData"


const Sidenav = ({item}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    const context = useContext(UserContext);
    const [roles,setRoles] = useState("");
    const roleIf = context.userInfo.rl_codigo 
  
    return (<UserContext.Consumer>
        {context=>

        
        <div className="container">
        <div style={{width: isOpen ? "180px" : "55px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Planes de Ahorro 7</h1>
                <div style={{marginLeft: isOpen ? "25px" : "0px"}} className="bars">
                    <BiMenu onClick={toggle}/>
                </div>
            </div>
            <div className='scrollbar' id="style-1">
            
                <div>
                
                    {context.userInfo.rl_codigo == 1  &&
                    
                    masterItem.map((item, index)=>(
                        <div>
                        <div  className={item.class} onClick={item.subNav && showSubnav} >
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        <div>
                             {item.subNav && subnav 
                             ? item.iconOpened 
                             : item.subNav 
                             ? item.iconClosed
                             : null}
                         </div>
                        </div>
                        

                        
                        <div style={{display: isOpen ? "block" : "none"}} className='submenu'>
                            <>
                        {subnav && item.subNav.map((item, index)=>{
            return(
                <Link to={item.path} key={index} className="dropdown-link" >
                    <label className="sidebarLabel">{item.title}</label>
                </Link>
                
                )
        })}
        </>
                               
                        </div>
                        
                    </div>)) }

                    {context.userInfo.rl_codigo == 1.2  &&
                    
                    operacionesItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className={item.class} activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        
                    </NavLink>)) }

                
                
                </div>
            
            </div>
        </div>
      
     </div>}
     </UserContext.Consumer>
    )

}

export default Sidenav;