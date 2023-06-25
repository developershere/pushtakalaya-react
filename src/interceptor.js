import axios from "axios";
const newAxios = axios.create({
    baseURL : 'https://pustakalaya-beckbone.onrender.com/',
    timeout : 30000,
    headers : {
        "Content-Type":'application/json'
    },
});
export default newAxios;