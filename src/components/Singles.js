import { MDBContainer, MDBRow,MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { Footer } from "./Footer";
import singles1 from "../images/singles1.png";
import singles2 from "../images/singles2.png";

export const Singles = ()=>{
    return(
        <>
            <MDBContainer>
            <MDBRow center style={{fontWeight : "bold",fontSize:"larger",fontFamily:"Times New Roman",textDecoration:"underline",marginTop:"25px"}}>
                Jacquard Singles
            </MDBRow>
            <br></br>
            
            <MDBRow>
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
                    <div className="cardd">
                        <img src = {singles2} className = "cardimage img-fluid" alt = "img"/>
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
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
                    <div className="cardd">
                        <img src = {singles2} className = "cardimage img-fluid" alt = "img"/>
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
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
                    <div className="cardd">
                        <img src = {singles2} className = "cardimage img-fluid" alt = "img"/>
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