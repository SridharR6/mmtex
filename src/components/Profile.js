import axios from "axios";
import { useEffect, useState } from "react";
import { MDBContainer, MDBInput, MDBRow,MDBCol } from "mdb-react-ui-kit";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";


export const Profile = ()=>{

    const navigate = useNavigate();
    const [fetching, setFetching] = useState(true);
    const [edit, setEdit] = useState(false);
    const [details,setDetails] = useState({
        "fname":"",
        "lname":"",
        "dob":"",
        "mailid":"",
        "mob":"",
        "pwd":"",
    });
    const [tempDetails,setTempDetails] = useState({});
    const func = ()=>{
        
        axios.get(`http://localhost:6523/api/profile?id=${JSON.parse(localStorage.getItem("currUser")).userId}`).then((resp)=>{
        setDetails({
            ...details,
            "fname":resp.data.fname,
            "lname":resp.data.lname,
            "dob":resp.data.dob,
            "mailid":resp.data.mailid,
            "mob":resp.data.mob,
            "pwd":resp.data.pwd
        })
        
    }).catch(err=>alert(err));
    }

    useEffect(()=>{
        func();

    },[fetching]
    )


    return(

        <>
            
            <MDBContainer fluid className="wholePage">
                <MDBRow>
                    <MDBCol>
                        userdata her
                    </MDBCol>
                    <MDBCol>
                        others here
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div>
                
                <button onClick={()=>setEdit(!edit)}>{edit?"Save":"Edit"}</button>
                <button onClick={()=>{
                    localStorage.clear();
                    navigate("/");
                }}>LogOut</button>
                
            </div>
        </>
    );
}