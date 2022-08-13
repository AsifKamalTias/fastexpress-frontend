import { useEffect, useState } from "react";
import axiosConfig from "../components/axiosConfig";
const Test = () =>
{
    const [data, setData] = useState("");
    const viewData = () =>{
        axiosConfig.post("/test").then
        ((rsp)=>{
            setData(rsp.data);
            console.log(rsp.data);
        },(err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <button onClick={viewData}>Hello</button>
            {/* <p>{{data}}</p> */}
        </>
    );
}

export default Test;