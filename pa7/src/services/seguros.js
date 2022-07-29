import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:3001/'
},[])

export function getSeguros(){
    return instance.get("seguros")
}
export function postUsers(){
    return instance.post('')
}




