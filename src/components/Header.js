import "../styles/Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import loading from "../images/loading.gif";
import logo1 from "../images/logo1.jpg";

export const Header = ()=>{
    
    const rendered = true;
    const auth = useAuth();
    
    useEffect(
        ()=>{
            document.title = "MM Tex";            
            axios.get("http://localhost:6523/api/start").then((resp,err)=>{
                if(resp.status == 200){
                    console.log("db connected successfully...");
                    auth.setDbConnect(true);
                }
            }).catch(err=>alert("there is some in error in reaching the db... try later"));
        },[rendered]
    )
    

    useEffect(
        ()=>{
            if(localStorage.getItem("userLoggedIn")=="true"){
                auth.setUserLoggedIn(true);
            }
            if(localStorage.getItem("userLoggedIn")==null){
                auth.setUserLoggedIn(false);
            }
        },[localStorage.getItem("userLoggedIn")]
    )


    useEffect(
        ()=>{
            if(localStorage.getItem("adminLoggedIn")=="true"){
                auth.setAdminLoggedIn(true);
            }
            if(localStorage.getItem("adminLoggedIn")==null){
                auth.setAdminLoggedIn(false);
            }
        },[localStorage.getItem("adminLoggedIn")]
    )



    const navigate = useNavigate();
    
    return(
        <>

            {
                !auth.dbConnect &&
                <div className="loadingdb">
                    <img src={loading} className = "img-fluid" ></img>
                </div>
            
            }
            {/* <Footer/> */}
            <Navbar bg="dark" variant = "dark" expand="md" className="menubar" sticky = "top" style={{
                padding:"20px",
            }}> 
                <Container fluid>
                    <Navbar.Brand onClick={()=>navigate("/aboutus")} style = {{cursor:"pointer",display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <img src={logo1} alt = "logo" className="img-fluid" style={{borderRadius:"200px",height:"55px"}}>
                        </img>
                        <div style={{fontSize:"35px",display:"flex", fontFamily:"arial",fontStyle:"italic", fontWeight:"bolder"}}>Tex</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>

                            <NavDropdown title="Products" id="navbarScrollingDropdown" bg = "dark">
                                <NavDropdown.Item onClick={()=>navigate("/rolls")}>Rolls</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>navigate("/kitchentowels")}>Kitchen Towels</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>navigate("/singles")}>Singles</NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link onClick={()=>navigate("/aboutus")}>AboutUs</Nav.Link>
                            <Nav.Link onClick={()=>navigate("/contact")}>ContactUs</Nav.Link>
                            
                            {   
                                (!auth.userLoggedIn && !auth.adminLoggedIn) && 
                                <Nav.Link onClick={()=>navigate("/userlogin")}>Login/SignUp</Nav.Link>
                            }

                            {
                                auth.userLoggedIn && 
                                <Nav.Link onClick={()=>navigate("/profile")}>Profile</Nav.Link>
                            }

                            {
                                auth.adminLoggedIn && 
                                <Nav.Link onClick={()=>navigate("/")}>Admin Dashboard</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}
