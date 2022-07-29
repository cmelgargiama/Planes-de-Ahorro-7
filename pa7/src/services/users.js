import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:3001/'
})

export function getUsers(){
    return instance.get("")
}
export function postUsers(){
    return instance.post('')
}




