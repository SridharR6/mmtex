
import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react'
import '../styles/Contact.css';


export function Contact() {
  return (
   <>
    <div class="login-box">
        <h2>Keep in touch</h2>
        <form action="">
            <div class="user-box">
                <input type="text" name="" id="" required=""/>
                <label for="">Name</label>
            </div>
            <div class="user-box">
                <input type="email" name="" id="" required=""/>
                <label for="">Email</label>
            </div>
            <div class="user-box">
                <input type="text" name="" id="" required=""/>
                <label for="">Phone</label>
            </div>
            <div class="user-box">
                <input type="text" name="" id="" required=""/>
                <label for="">Leave ur feedback here</label>
            </div>

            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </a>
        </form>
    </div>
   </>
  )
}