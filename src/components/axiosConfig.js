import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

instance.interceptors.request.use((config)=>{
    config.headers.common["Authorization"]=localStorage.getItem("_authToken");
    return config;
},(err)=>{

});

instance.interceptors.response.use((rsp)=>{
    return rsp;
},(err)=>{
    if(err.response.status===401){
        localStorage.removeItem("_authToken");
        window.location.href="/abort";
    }
    return Promise.reject(err);
});
export default instance;