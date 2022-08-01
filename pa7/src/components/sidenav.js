import React,  {useState, useContext} from 'react'
import { BiAlignMiddle,
    BiBus,BiListPlus, BiFile, BiTimeFive, BiPhoneCall,
     BiIdCard, BiGroup, BiCog, BiLineChart, BiPrinter,
      BiTachometer, BiLinkExternal, BiCart, BiCar, BiLock, BiMenu
 } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const Sidenav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const context = useContext(UserContext);
    const [roles,setRoles] = useState("")
  
   
   

    const masterItem=[
        

        {
            path:'/operaciones',
            name:"Operaciones",
            icon: <BiListPlus/>,
            
        },{
            path:'/mesadeplanes',
            name:"Mesa De Planes",
            icon: <BiFile/>,
            
        },
        {
            path:'/mora',
            name:"Mora",
            icon: <BiTimeFive/>,
            
        },
        {
            path:'/callcenter',
            name:"Call Center",
            icon: <BiPhoneCall/>,
            
        },
        {
            path:'/personal',
            name:"Personal",
            icon: <BiIdCard/>,
            
        },
        {
            path:'/emprendedores',
            name:"Emprendedores",
            icon: <BiGroup/>,
                    },
        {
            path:'/configuracion',
            name:"Configuracion de Datos Generales",
            icon: <BiCog/>,
            
        },{
            path:'/contabilidad',
            name:"Contabilidad",
            icon: <BiLineChart/>,
            
        },{
            path:'/reportes',
            name:"Reportes",
            icon: <BiPrinter/>,
            
        },{
            path:'/plansubite',
            name:"Plan Subite Fiat",
            icon: <BiTachometer/>,
            
        },{
            path:'/entregas',
            name:"Entregas",
            icon: <BiLinkExternal/>,
            
        },{
            path:'/compra',
            name:"Compra Rescindidos",
            icon: <BiCart/>,
            
        },{
            path:'/usados',
            name:"Usados",
            icon: <BiCar/>,
            
        },{
            path:'/stockvehiculos',
            name:"Stock Vehiculos Plan Ahorro",
            icon: <BiBus/>,
            
        },{
            path:'/seguros',
            name:"Seguros",
            icon: <BiLock/>,
          
        },


    ]

    const operacionesItem=[
        {
            path:'/operaciones',
            name:"Operaciones",
            icon: <BiListPlus/>,
            
        },

    ]

    return (
        <div className="container">
        <div style={{width: isOpen ? "200px" : "55px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Planes de Ahorro 7</h1>
                <div style={{marginLeft: isOpen ? "25px" : "0px"}} className="bars">
                    <BiMenu onClick={toggle}/>
                </div>
            </div>
            <div className='scrollbar' id="style-1">
            {roles = 2  &&
                <div>
                  {  masterItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
                </div>
            }
            {roles = 1  &&
            <div>
            {operacionesItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))}
            </div>
            }
            </div>
        </div>
        <main>{children}</main>
     </div>
    )

}

export default Sidenav;