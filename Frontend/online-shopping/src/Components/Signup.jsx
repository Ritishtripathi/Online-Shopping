import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
const Signup=()=>{

     
  const [Data, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
const Navigate=useNavigate();
  const register = (e) => {
    const { name, value } = e.target;
    setFormData({ ...Data, [name]: value });
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/customer', Data);
      if (response && response.data) {
        console.log(response.data);
        Swal.fire({
          icon:'success',
          titel:'success',
          text:'Reggistration successfully!'
          });
          Navigate('/Login');
      }
    } 
    catch (error) {
      console.error('error durinng signnup',error);
      if(error.response && error.response.data){
          console.error('Error details:',error.response.data);
      }
      else{
         console.log('Unexpecte error'); 
      }
    }
  }

    return(
     <>
     <Header/>
     <div className="header-signup">
        <h4>Signup Page</h4>
        Signup to a world of shopping
     </div>
   <div  className="form">
   <form  onSubmit={submit}>  
    <div className="flex-column">
    <label className="label">Name </label></div>
      <div className="inputForm">
        <input type="text" className="input" placeholder="Enter your Name" name="name" value={Data.name} onChange={register}/>
      </div>
      <label className="label">Email </label>
      <div className="inputForm">
        <input type="email" className="input" placeholder="Enter your Email" name='email' value={Data.email} onChange={register}/>
      </div>
    
    <div className="flex-column">
      <label className="label">Password </label></div>
      <div className="inputForm">
        <input type="password" className="input" placeholder="Enter your Password" name='password' value={Data.password} onChange={register}/>
        </div>
    <button className="button-submit" type="submit">SIGN UP</button>
    </form>
    <p className="p">Already have account ? <Link to='/Login' className="span">Sign In</Link></p>

  </div>
     </>
    );
}
export default Signup;