import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, useContext, useEffect, useState} from 'react';
import { UserContext } from "../context/UserContext"
import {render} from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fiat from "../fiat500.png";
import {createHash} from 'crypto-js';
import {Buffer} from 'buffer';
import { getToken, setUserSession, removeUserSession } from '../utils/Common';
import useAuth from '../hooks/useAuth'
import  {getUsers, postUsers}  from '../services/users.js';
import axios from 'axios';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import { useNavigate, useLocation,  } from 'react-router-dom';
import  Alert  from 'react-bootstrap/Alert';


function LoginPage() {
const [form,setForm]= useState("");
const [users, setUsers] = useState("");
const [isSubmitting , setIsSubmitting] = useState(false);
const [error, setError] = useState(null);
const context = useContext(UserContext);
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');
const [roles,  setRoles] = useState([{}]);
const {setAuth} = useAuth();
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";




/*useEffect(()=>{
  async function loadUser(){
    if(!getToken()){
      setLoading(false);
      return;
    }
    
    try{const data:}
    catch{}
  }


  loadUser();
})    */


    const HandleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(value, name)
        setForm(
          
          {...form,
            [name]:value})
            
        };
        
    const handleSubmit = (event) =>{
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const genericErrorMessage = "Algo funciona mal! Intente nuevamente";
  
    axios.post('http://localhost:3001/',form)
           .then(async response => {
          //console.log(response.data)
          setLoading(false)
          setUserSession(response.data.message, response.data.token, response.data.roles
             )
             console.log(response.data, response.data.rl_codigo)
             
             
             //history.push('/home')
          //if(!response.ok){
              
              //const roles = response?.data?.rl_codigo;
              const roles = response.data.rl_codigo.map(({rl_codigo}) => rl_codigo);
              setRoles(roles);
              //const rl = [...roles.map(({})=> length) ]
              var i ;
              var roleText = "";
              console.log(roles);
              /*for(i=0 ; i<roles.length ; i++){
                roleText += "rl_codigo" + (i + 1) + ":" + roles[i] + "\n" 

              }*/
              
              console.log(roleText)
              //loginRoles(json.stringify(roleText))
              const user = response?.data?.Nombre;
              const accessToken = response.data.token;             
              context.setAuth({roles, user, accessToken})
              context.loginUser({roles:response.data.roles, login:response.data.Nombre, 
               rl_codigo:[...roles] ,  empresa:form.empresa })
              navigate(from, {replace:true})
          /*} else {
            setUserContext(oldValues => {
              return{...oldValues,token:data.token}
              
            }
            )
          setMessage(response.data.message)}*/
         
        })
    .catch(error => {
      if(error.response.status === 400){
        setError(error.response.data.message)
         }else if(error.response.status === 401){
        setError(error.response.data.message)}
      setIsSubmitting(false)
      //setError(genericErrorMessage)
      console.log(error)
    })
    }  ;  

//useEffect( () => {postUsers()},[])
   
    
        
            return(
                            
                <div className='containerLogin'>
            <div className="title">
            <h1>Planes de Ahorro 7</h1>
            <br/>
            <p>Bienvenido a PA7</p>
            <br/>
          </div>
         <div className="bodyLogin">
          <img src={fiat} />
            <br/>
            <div className="form">
            <Form onSubmit={handleSubmit} >
              
              <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Empresa</Form.Label>
              <Form.Select onChange={HandleChange} name="empresa" id="selectEmpresas" value={form.empresa} required>
                <option value="">--Elegir empresa--</option>
                <option value="Car Group S.A." id="carGroup">Car Group S.A.</option>
                <option value="Gestion Financiera S.A." id="gestionFinanciera">Gestion Financiera S.A.</option>
                <option value="Auto Net S.A." id="autoNet">AutoNet S.A</option>
                <option value="Autos del Plata S.A." id="autosDelPlata">Autos del Plata S.A.</option>
                <option value="Detroit S.A." id="detroit">Detroit S.A.</option>
                <option value="Gestion Financiera Luxcar" id="gestionFinancieraLuxcar">Gestión Financiera Luxcar</option>
                <option value="Alizze S.A." id="alizze">Alizze S.A.</option>
              </Form.Select>
              </Form.Group>
              
              
              <Form.Label>Usuario</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicInput1">
              <Form.Control onChange={HandleChange} name="username" type="text" id="username" value={form.username} required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control onChange={HandleChange} name="password" type="password" id="password" value={form.password} required/>
              
              </Form.Group>
              
              <Button variant="secondary" type="submit" disabled={isSubmitting} >Iniciar Sesion</Button>
              </Form>
            </div>
          </div>
            {error &&
            
            <Alert style={{margin: "10px 10px"}}  variant="danger">Error al ingresar! {error}</Alert>
            
            }
          </div>
         

        ) 
    
    }


    export default LoginPage;