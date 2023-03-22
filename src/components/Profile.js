import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Profile = ()=>{

    const func = (e)=>{
        e.preventDefault();
        console.log("func");
        axios.get(`http://localhost:6523/api/profile?id=${localStorage.getItem("userId")}`).then((resp)=>{

        alert(resp);
    }).catch(err=>alert(err));
    }
    
    return(

        <>
            profile page
            <div>
                <button onClick={(e)=>func(e)}> click</button>
            </div>
        </>
    );
}