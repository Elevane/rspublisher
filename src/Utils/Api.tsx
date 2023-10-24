import { Dictionary } from "@reduxjs/toolkit";
import { LoginRegisterRequest, IRequest, SaveGoogleKeyRequest } from "../models/apiModels";

const request = async (method : string, route : string, content : IRequest) => {
  let header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
  };
    let options: Dictionary<any> = {
        method: method,
        headers: header     
        }
    if(content !== null)
        options["body"] = JSON.stringify(content)
  
  return await fetch(route, options)
    .then((data) => {
      if(data.status != 200){
       throw `${data.status}`      
      }    
      if (data.headers.get('content-length') === '0'){
        return []
      }
      return data.json()
    }).then((value)=>
    { 
        return { result: value, failure: false, errorMessage: null };
    })
    .catch((error : string) => {
      return {
        result: null,
        failure: true,
        errorMessage: `${error}`,
      };
    });
};

const post = async(route : string, content: IRequest) => {
  return await request("POST", route, content);
};

const apiBaseRoute = process.env.REACT_APP_API_URL;

const saveGoogleSecrets = async (content:SaveGoogleKeyRequest ) => {
  return await post(`${apiBaseRoute}/Youtube`, content);
};

const login = async (content : LoginRegisterRequest) => {
  return await post(`${apiBaseRoute}/login`, content);
};

const register = async (content: LoginRegisterRequest) => {
  return await post(`${apiBaseRoute}/register`, content);
};

const api = { saveGoogleSecrets, login, register };
export default api