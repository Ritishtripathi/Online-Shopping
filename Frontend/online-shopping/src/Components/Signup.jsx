import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Signup=()=>{
    return(
     <>
     <Header/>

     <div className="header-signup">
        <h4>Signup Page</h4>
        Signup to a world of shopping
     </div>

       <form className="form">
    <div className="flex-column">
    <label className="label">Name </label></div>
      <div className="inputForm">
        <input type="text" className="input" placeholder="Enter your Name"/>
      </div>
      <label className="label">Email </label>
      <div className="inputForm">
        <input type="email" className="input" placeholder="Enter your Email"/>
      </div>
    
    <div className="flex-column">
      <label className="label">Password </label></div>
      <div className="inputForm">
        <input type="password" className="input" placeholder="Enter your Password"/>
        </div>
    <button className="button-submit">SIGN UP</button>
    <p className="p">Already have account <Link to='/Login' className="span">Sign In</Link></p>

   </form>
     </>
    );
}
export default Signup;