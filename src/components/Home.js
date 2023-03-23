import { MDBContainer,MDBRow,MDBBtn, MDBCol } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
import carousel3 from "../images/carousel3.png";
import "../styles/Home.css";
import kitchentowel1 from "../images/kitchentowel1.jpg";
import singles1 from "../images/singles1.png";
import rolls1 from "../images/rolls1.png";
import { Footer } from './Footer';

export const Home = ()=>{
    return(
        <>
        <MDBContainer className='carousel' fluid>
            <Carousel>
              <Carousel.Item>
                <center>
                <img
                  className="img-fluid"
                  src={carousel1} 
                  alt="First slide"
                />
                </center>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <center>
                <img
                  className="img-fluid"
                  src={carousel2}
                  alt="Second slide"
                />
                </center>
                <Carousel.Caption>
                  <h3>Buy it</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <center>
                <img
                  className="img-fluid"
                  src={carousel3}
                  alt="Third slide"
                />
                </center>
                <Carousel.Caption>
                  <h3>Worth it</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <hr></hr>
            </MDBContainer>


            <MDBContainer style={{fontFamily:"Times New Roman"}}>
            <MDBRow>
                <center><h3>Our Topic Categories</h3></center>
            </MDBRow>
            <br></br>
            <MDBRow>
                <MDBCol md = {4}>
                    <div className="cardd">
                        <img src = {kitchentowel1} className = "cardimage img-fluid" alt = "img"/>
                        <div className="cardcontent">
                            <div style={{marginBottom:"10px",textAlign:"justify"}}>
                                <div><b>Price:</b> 78INR/metre</div>
                                <div><b>Material:</b> Cotton</div>
                                <div><b>Style:</b> Jacquard</div>
                                <div><b>Use:</b> Towels, Garments, WashCloth</div>
                                <div><b>Attributes:</b> Light in Weight, Washable</div>
                                <div><b>Supply Ability:</b> 300 metres per day</div>
                            </div>
                            
                            <div style={{margin:"18px 0 15px 0"}}><MDBBtn>More Info</MDBBtn></div>
                            
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md = {4}>
                    <div className="cardd">
                        <img src = {singles1} className = "cardimage img-fluid" alt = "img"/>
                        <div className="cardcontent">
                            <div style={{marginBottom:"10px",textAlign:"justify"}}>
                                <div><b>Price:</b> 78INR/metre</div>
                                <div><b>Material:</b> Cotton</div>
                                <div><b>Style:</b> Jacquard</div>
                                <div><b>Use:</b> Towels, Garments, WashCloth</div>
                                <div><b>Attributes:</b> Light in Weight, Washable</div>
                                <div><b>Supply Ability:</b> 300 metres per day</div>
                            </div>
                            <div style={{margin:"18px 0 15px 0"}}><MDBBtn>More Info</MDBBtn></div>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md = {4}>
                    <div className="cardd">
                        <img src = {rolls1} className = "cardimage img-fluid" alt = "img"/>
                        <div className="cardcontent">
                            <div style={{marginBottom:"10px",textAlign:"justify"}}>
                                <div><b>Price:</b> 78INR/metre</div>
                                <div><b>Material:</b> Cotton</div>
                                <div><b>Style:</b> Jacquard</div>
                                <div><b>Use:</b> Towels, Garments, WashCloth</div>
                                <div><b>Attributes:</b> Light in Weight, Washable</div>
                                <div><b>Supply Ability:</b> 300 metres per day</div>
                            </div>
                            <div style={{margin:"18px 0 15px 0"}}><MDBBtn>More Info</MDBBtn></div>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <br></br>
            <Footer/>
        </>
    );
}