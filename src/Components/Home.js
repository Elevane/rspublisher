
import React, { useState } from "react";
import useLocalStorage from "./auth/Hooks/useLocalStorage";
import AddGoogleApiForm from "./AddGoogleApiForm";
import PublishContetButton from "./PublishContetButton";
export default function Home(){
    const user = useLocalStorage.GetUser();
    const [loading, setLoading] =  useState(false)
    const userdata = JSON.parse(user)
    return(
        <div>
        <h1>welcome {userdata.username}<strong style={{color:"red"}}>{ user.username }</strong></h1>
        <AddGoogleApiForm loading={loading} setLoading={setLoading} ></AddGoogleApiForm>
        <PublishContetButton loading={loading} setLoading={setLoading}></PublishContetButton>
        <div><a href="/logout">logout</a></div>
        </div>
        );
}