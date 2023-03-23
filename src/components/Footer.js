import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../styles/Footer.css";

export const Footer = ()=>{
    return(
        <>
            <MDBContainer className="footer" fluid>
                <hr></hr>
                <MDBRow>
                    <MDBCol md={3} xs = {12} >
                        <ul className="nobullets">
                            <li>Home</li>
                            <li>About Us</li>
                            
                        </ul>
                    </MDBCol>
                    <MDBCol md={3} xs = {12} >
                        <ul className="nobullets">
                            <li>Contact Us</li>
                            <li>Support Us</li>
                        </ul>
                    </MDBCol>
                    
                    <MDBCol md = {3} xs = {12}>
                        <ul className="nobullets">
                            <li>Service charges</li>
                            <li>Terms and Conditions</li>           
                        </ul>
                    </MDBCol>
                    <MDBCol md = {3} xs = {12}>
                        <ul className="nobullets">
                            <li>Privacy Policy</li>
                            <li>Become a Partner</li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                <hr></hr>
                <MDBRow center>&copy;All rights reserved</MDBRow>
            </MDBContainer>
        </>
    );
}