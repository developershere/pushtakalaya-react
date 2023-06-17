import axios from "axios";
window.alert('sdff');
const newAxios = axios.create({
    baseURL : 'https://pustakalaya-beckbone.onrender.com',
    timeout : 5000,
    headers : {
        "Content-Type":'application/json'
    },
});
export default newAxios;