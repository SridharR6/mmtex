import { MDBContainer, MDBRow,MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { Footer } from "./Footer";
import rolls1 from "../images/rolls1.png";
import rolls2 from "../images/rolls2.png";

export const Rolls = ()=>{
    return(
        <>
            <MDBContainer>
            <MDBRow center style={{fontWeight : "bold",fontSize:"35px",fontFamily:"Times New Roman",textDecoration:"underline", marginTop:"25px"}}>
                Jacquard Rolls
            </MDBRow>
            <br></br>
            
            <MDBRow>
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
                    <div className="cardd">
                        <img src = {rolls2} className = "cardimage img-fluid" alt = "img"/>
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
                <MDBCol md = {4} sm = {6} >
                    <div className="cardd">
                        <img src = {rolls2} className = "cardimage img-fluid" alt = "img"/>
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
                <MDBCol md = {4} sm = {6} >
                    <div className="cardd">
                        <img src = {rolls2} className = "cardimage img-fluid" alt = "img"/>
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