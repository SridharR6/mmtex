import { MDBContainer, MDBInput, MDBRow,MDBCol, MDBBtn } from "mdb-react-ui-kit";
import {useState } from "react";
import "../styles/UserLogin.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import loading from "../images/loading.gif";


export const UserLogin = ()=>{
    const [mailid, setMailid] = useState();
    const [pwd, setPwd] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const login = (e)=>{
        setIsLoading(true);
        axios.post("http://localhost:6523/api/userlogin",{
            'mailid':mailid,
            'pwd':pwd
        }).then((resp)=>{
            setIsLoading(false);
            if(resp.status == 297){
                alert("it seems no such mail id exists.... try signup");
            }
            else if(resp.status == 296){
                alert("Password is incorrect....");
            }
            else if(resp.status == 295){
                
                alert("successfully logged in....");
                localStorage.setItem("userLoggedIn",true);
                var user = {
                    "userId":resp.data._id,
                    'fname':resp.data.fname,
                    'lname':resp.data.lname,
                    'dob':resp.data.dob,
                    'mob':resp.data.mob,
                    'mailid':resp.data.mailid,
                    'pwd':resp.data.pwd
                };
                localStorage.setItem("currUser",JSON.stringify(user));
                navigate("/");
            }
        }).catch(err=>{
            alert("some error occured try refreshing the page")
        });
        e.preventDefault();
    }
    const reset = (e)=>{
        setMailid("");
        setPwd("");
    }

    const navigate = useNavigate();
    return(
        <>

            {
                isLoading &&
                <div className="loading">
                    <img src={loading} ></img>
                </div>
            
            }

            <MDBContainer style={{marginTop:50,width:"80%"}}>
                <form className="loginform" onSubmit={login}>
                    <p className="heading">Welcome Back!!</p> 
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput placeholder = "Email-id" value = {mailid} onChange = {(e)=>setMailid(e.target.value)} type={"email"} required = {true}/></MDBCol>
                            </MDBRow>
                            <br></br>                        
                            
                            <MDBRow>
                                <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput placeholder = "Password" value = {pwd} onChange = {(e)=>setPwd(e.target.value)} type={"password"} required/></MDBCol>
                            </MDBRow>
                            <br></br>

                            <MDBRow center>
                                <MDBCol offsetSm={3}> <button type="submit">SUBMIT</button> </MDBCol>
                                <MDBCol> <button onClick={reset}>CLEAR</button> </MDBCol>
                            </MDBRow>
                            <br></br>

                            <MDBRow>
                                <center>
                                <MDBCol> <a onClick={()=>navigate('/signup')} className="linkst">Don't Have An Account?</a> </MDBCol>
                                </center>
                            </MDBRow>
                            <br></br>

                            <MDBRow>
                                <center>
                                <MDBCol> <a onClick={()=>navigate('/adminlogin')} className="linkst">Login as Admin...</a> </MDBCol>
                                </center>
                            </MDBRow>
                            <br></br>
                        </MDBContainer>
                </form>
                <br></br>
                </MDBContainer>
        </>
    );
}