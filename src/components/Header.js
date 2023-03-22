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


export const Header = ()=>{
    
    const rendered = true;
    const auth = useAuth();
    
    useEffect(
        ()=>{
            document.title = "MM Tex";
            if(localStorage.getItem("loggedIn")!=null && localStorage.getItem("loggedIn")===true){
                auth.setLoggedIn(true);
            }
            axios.get("http://localhost:6523/api/start").then((resp,err)=>{
                if(resp.status == 200){
                    console.log("db connected successfully...");
                    auth.setDbConnect(true);
                }
            }).catch(err=>alert("there is some in error in reaching the db... try later"));
        },[rendered]
    )

    const navigate = useNavigate();
    
    return(
        <>

            {
                !auth.dbConnect &&
                <div className="loadingdb">
                    <img src={loading} ></img>
                </div>
            
            }

            {
                auth.dbConnect &&
            <Navbar bg="dark" variant = "dark" expand="md" className="menubar" sticky = "top" style={{
                padding:"15px",
            }}> 
                <Container fluid>
                    <Navbar.Brand onClick={()=>navigate("/aboutus")} style = {{cursor:"pointer"}}>MM Tex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>

                            <NavDropdown title="Products" id="navbarScrollingDropdown" bg = "dark">
                                <NavDropdown.Item onClick={()=>navigate("/products")}>Cotton Rolls</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>navigate("/products")}>Kitchen Towels</NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link onClick={()=>navigate("/aboutus")}>AboutUs</Nav.Link>
                            <Nav.Link onClick={()=>navigate("/contact")}>ContactUs</Nav.Link>
                            
                            {   
                                !auth.loggedIn && 
                                <Nav.Link onClick={()=>navigate("/login")}>Login/SignUp</Nav.Link>
                            }

                            {
                                auth.loggedIn && 
                                <Nav.Link onClick={()=>navigate("/profile")}>Profile</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            }

        </>
    );
}
