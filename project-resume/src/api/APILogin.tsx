const Axios = require('axios');


export const  getUserInformation = ()=>{
    return Axios.get('https://localhost:44363/api/User');
}

export const updateUserPassword=(User:{Email: string, Password:string})=>{
    return Axios.post('https://localhost:44363/api/User/forgotpassword',User);
}

export const loginUser=(User:{Email: string, Password:string})=>{
    return Axios.post('https://localhost:44363/api/User/loginUser',User) 
}