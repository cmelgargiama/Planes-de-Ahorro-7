import React,  {useState, useContext} from 'react'
import {  BiMenu, BiLogOut
 } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import SubMenu from './submenu';
import {masterItem, operacionesItem} from "./sidebarData"


const Sidenav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const context = useContext(UserContext);
    const [roles,setRoles] = useState("");
    const roleIf = context.userInfo.rl_codigo 
  
    return (<UserContext.Consumer>
        {context=>

        
        <div className="container">
        <div style={{width: isOpen ? "180px" : "55px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "grid" : "none" }} className="logo">Planes de Ahorro 7</h1>
                <div style={{marginLeft: isOpen ? "25px" : "0px"}} className="bars">
                    <BiMenu onClick={toggle}/>
                </div>
            </div>
            <div className='scrollbar' id="style-1">
                <div>
                    {context.userInfo.rl_codigo == '1'  &&
                    
                    masterItem.map((item, index)=>(
                        <div>
                        <Link to={item.path} className={item.class} activeclassName="active" >
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none" }} 
                        className="link_text">{item.name} 
                                              </div></Link>
                        <div style={{display: isOpen ? "block" : "none"}}
                         className='submenu'>
                       <SubMenu item={item} key={index} />
                        </div>
                        </div>
                         )) }

                    {context.userInfo.rl_codigo != '1' &&
                    operacionesItem.map((item, index)=>(
                        <div>
                        <Link to={item.path} className={item.class} activeclassName="active" >
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none" }} 
                        className="link_text">{item.name} 
                                              </div></Link>    
                        <div style={{display: isOpen ? "block" : "none"}}
                         className='submenu'>
                       <SubMenu item={item} key={index} />
                        </div>
                        </div>)) }

                
                </div>
            
               
            </div>
            <div class="profile" style={{width: isOpen ? "180px" : "55px"}}>
            <div class="profile-details"  style={{display: isOpen ? "block" : "none" }}>
          
           <div class="name_job">
             <div class="name">{context.userInfo.login}</div>
             <div class="job">{context.userInfo.roles}</div>
           </div>
         </div>
         <a href="/" style={{position: isOpen ? "relative" : "relative", marginLeft: isOpen ? "130px" : "0", bottom: isOpen ? "52px" : "12px" }} class="logout_button">
         <i id="log_out"><BiLogOut /></i>
        </a>
        </div>

        </div>
        
      <main>{children}</main>
     </div>}
     </UserContext.Consumer>
    )

}

export default Sidenav;