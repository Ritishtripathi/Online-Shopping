import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
import { Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Signup=()=>{

     
  const [Data, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    Key:'',
    gender:''
  });
const Navigate=useNavigate();
  const register = (e) => {
    const { name, value } = e.target;
    setFormData({ ...Data, [name]: value });
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/Signup', Data);
      if (response && response.data) {
        console.log(response.data);
        Swal.fire({
          icon:'success',
          titel:'success',
          text:'Registration successfully!'
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
       <Container fluid>
        <Row>
        <Col sm={12}> <Header/></Col>
        </Row><br/><br/>
        <Row>
          
            <div className="header-signup">
            <h4>Signup Page</h4>
            Signup to a world of shopping
            </div>
          
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>

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
        <div className="flex-column">
      <label className="label">Key*</label></div>
        <div className="inputForm">
        <input type="text" className="input" placeholder="Enter your Key" name='Key' value={Data.Key} onChange={register}/>
        </div>
        <div className="flex-column">
      <label className="label">Gender</label></div>
        <select className="inputForm"  name='gender' value={Data.gender} onChange={register} style={{width:'100%'}}>
         <option value='male'>male</option>
         <option value='female'>female</option>
         <option value='other'>other</option>
        </select>

    <button className="button-submit" type="submit">SIGN UP</button>
    </form>
    <p className="p">Already have account ? <Link to='/Login' className="span">Sign In</Link></p>

  </div>
          </Col>
          <Col sm={4}></Col>
        </Row>
       </Container>
     </>
    );
}
export default Signup;