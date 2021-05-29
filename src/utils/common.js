import axios from "axios";
import serverUrl from "../components/domain";

export const getUser=()=>{
    const userStr = sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken=()=>{
    return sessionStorage.getItem("token") || null ;
}

export const setUserSession=(token,user)=>{
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("user",JSON.stringify(user));
}

export const removeUserSession=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}
export const getRoom=()=>{
    axios.get(`${serverUrl}/users/rooms`,{'headers' : {"Authorization" : `Bearer ${getToken()}`}});

}