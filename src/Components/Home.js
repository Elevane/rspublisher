
import React from "react";
import AddGoogleApiForm from "./features/AddGoogleApiForm";
import PublishContentButton from "./features/PublishContentButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingState } from "../state/loading";
import { authState } from "../state/auth";



export default function Home(){
    const user = useRecoilValue(authState)
    const [loading, setLoading] =  useRecoilState(loadingState)
    return(
        <div>
        <h1>welcome <strong style={{color:"red"}}>{ user.username }</strong></h1>
        <AddGoogleApiForm loading={loading} setLoading={setLoading} ></AddGoogleApiForm>
        <PublishContentButton loading={loading} setLoading={setLoading}></PublishContentButton>
        <div><a href="/logout">logout</a></div>
        </div>
        );
}