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

import  {getUsers, postUsers}  from '../services/users.js';
import axios from 'axios';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';


function LoginPage() {
const [form,setForm]= useState("");
const [users, setUsers] = useState("");
const [isSubmitting , setIsSubmitting] = useState(false);
const [error, setError] = useState(null);
const context = useContext(UserContext)
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('')
const [roles,  setRoles] = useState('')
    
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
   /*fetch("http://localhost:3001/", {

            method: 'post',

            body: JSON.stringify(form),
            withCredentials: true,

            headers: {
                              "Content-Type": "application/json"

            }

        })*/
        .then(async response => {
          //console.log(response.data)
          setLoading(false)
          setUserSession(response.data.message, response.data.token, response.data.roles
             )
             console.log(response.data)
             
             
             //history.push('/home')
          //if(!response.ok){
           
            
              setRoles(response.data.roles)
              context.loginUser({roles:response.data.roles, login:response.data.Nombre})
            
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
         }else if(error.response.status===401){
        setError(error.response.data.message)}
      setIsSubmitting(false)
      setError(genericErrorMessage)
      console.log(error)
    })
    }  ;  

//useEffect( () => {postUsers()},[])
   
    
        
            return(
                            
                <div>
            <div class="title">
            <h1>PA7</h1>
            <br/>
            <p>Bienvenido a PA7</p>
            <br/>
          </div>
         <div class="body">
          <img src={fiat} />
            <br/>
            <div class="form">
            <Form onSubmit={handleSubmit} >
              
              <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Empresa</Form.Label>
              <Form.Select onChange={HandleChange} name="empresa" id="selectEmpresas" value={form.empresa} required>
                <option id="empty">--Elegir empresa--</option>
                <option value="carGroup" id="carGroup">Car Group S.A.</option>
                <option value="gestionFinanciera" id="gestionFinanciera">Gestion Financiera S.A.</option>
                <option value="autoNet" id="autoNet">AutoNet S.A</option>
                <option value="autosDelPlata" id="autosDelPlata">Autos del Plata S.A.</option>
                <option value="detroit" id="detroit">Detroit S.A.</option>
                <option value="gestionFinancieraLuxcar" id="gestionFinancieraLuxcar">Gestión Financiera Luxcar</option>
                <option value="alizze" id="alizze">Alizze S.A.</option>
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
            
          </div>
         

        ) 
    
    }


    export default LoginPage;