
import React from "react";
import AddGoogleApiForm from "./features/AddGoogleApiForm";
import PublishContentButton from "./features/PublishContentButton";
import {  useRecoilValue } from "recoil";
import { AppUser } from "../models/AppModels";
import { authState } from "../state/auth";



export default function Home(){
    
    const user: AppUser = useRecoilValue(authState)
    

    return(
        <div>
        <h1>welcome <strong style={{color:"red"}}>{ user.username }</strong></h1>
        <AddGoogleApiForm></AddGoogleApiForm>
        <PublishContentButton></PublishContentButton>
        <div><a href="/logout">logout</a></div>
        </div>
        );
}