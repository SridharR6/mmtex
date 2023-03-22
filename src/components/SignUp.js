import { MDBContainer, MDBInput, MDBRow,MDBCol, MDBBtn } from "mdb-react-ui-kit";
import {useState } from "react";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import loading from "../images/loading.gif";
// import emailjs from '@emailjs/browser';



export const SignUp = ()=>{


    const navigate = useNavigate();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [dob, setDob] = useState();
    const [mailid, setMailid] = useState();
    const [pwd, setPwd] = useState();
    const [pwd1, setPwd1] = useState();
    const [mob, setMob] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // function sendmail(){
    //     const templateParams = {
    //         name: this.state.n,
    //         crushname: this.state.c,
    //         result: this.state.res
    //     };
        
    //     emailjs.send('service_zqkwgrr','template_ix4hxkc', templateParams, 'wCJRAs2Rb3c24MkDO')
    //         .then((response) => {
    //            console.log('SUCCESS!', response.status, response.text);
    //         }, (err) => {
    //            console.log('FAILED...', err);
    //         });
    // }

    const signup = (e)=>{
        
        axios.post("http://localhost:6523/api/signup",{
            'fname':fname,
            'lname':lname,
            'dob':dob,
            'mailid':mailid,
            'mob':mob,
            'pwd':pwd
        }).then(resp=>{
            setIsLoading(false);
            if(resp.status == 219){
                alert("Successfully signed up...Login to view your profile");
                navigate("/login");
            }
            else if(resp.status == 299){
                alert("mobile number already exists....");
            }
            else if(resp.status == 298){
                alert("mail id already exists....");
            }

        }).catch(err=>alert("some error occured try refreshing the page"));
        e.preventDefault();
    }
    const reset = (e)=>{
        setFname("");
        setLname("");
        setDob("");
        setMailid("");
        setMob("");
        setPwd("");
        setPwd1("");
    }
    return(
        <>
            {
                isLoading &&
                <div className="loading">
                    <img src={loading} ></img>
                </div>
            
            }
            
            <MDBContainer style={{marginTop:50,width:"80%"}}>
                <form className="signupform" onSubmit={signup}>
                <p className="heading">Create New Account!!</p> 
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md={3} xs = {4} offsetMd = "3"> <MDBInput  label = "FirstName" type={"text"} value = {fname} onChange = {(e)=>setFname(e.target.value)} required/></MDBCol>
                            <MDBCol md={3} xsx = {4} > <MDBInput label = "LastName" type={"text"} value = {lname} onChange = {(e)=>setLname(e.target.value)} required/></MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput placeholder = "D.O.B" type={"date"} value = {dob} onChange = {(e)=>setDob(e.target.value)} required/></MDBCol>
                        </MDBRow>
                        <br></br>

                        <MDBRow>
                            <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput placeholder = "Email-id" value = {mailid} onChange = {(e)=>setMailid(e.target.value)} type={"email"} required = {true}/></MDBCol>
                        </MDBRow>
                        <br></br>
                        
                        <MDBRow>
                            <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput placeholder = "Mobile Number" value = {mob} onChange = {(e)=>setMob(e.target.value)} type={"tel"} required = {true} pattern="[0-9]{10}"/></MDBCol>
                        </MDBRow>
                        <br></br>
                        
                        <MDBRow>
                            <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput placeholder = "Create new Password" value = {pwd} onChange = {(e)=>setPwd(e.target.value)} type={"password"} required/></MDBCol>
                        </MDBRow>
                        <br></br>
                        
                        <MDBRow>
                            <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput placeholder = "Confirm Password" value = {pwd1} onChange = {(e)=>setPwd1(e.target.value)} type={"password"} required/></MDBCol>
                        </MDBRow>
                        <br></br>

                        <MDBRow>
                            <MDBCol offsetMd={3}> <button type="submit" onClick={()=>setIsLoading(true)}>Submit</button> </MDBCol>
                            <MDBCol> <button onClick={reset}>Clear</button> </MDBCol>
                        </MDBRow>
                        <br></br>

                        <MDBRow>
                            <MDBCol offsetMd={5}> <a onClick={()=>navigate('/login')} className="linkst">Already an User?</a> </MDBCol>
                        </MDBRow>
                        <br></br>
                    </MDBContainer>
                </form>
                <br></br>
                </MDBContainer>
                
        </>
    );
}