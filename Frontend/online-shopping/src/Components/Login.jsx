import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Swal from "sweetalert2";
import axios from "axios";
import { Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Login=()=> {
  const [data, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const login = (e) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
  }

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', data);
      if (response && response.data && response.data.token) {
        console.log(response.data);
        // Store the token in localStorage
        localStorage.setItem('token ', response.data.token);

        // data in localstorage '
        localStorage.setItem('data',JSON.stringify(data));

        console.log("localstorage",localStorage);

        Swal.fire({
          icon: 'success', 
          title: 'Success',
          text: 'Login successful!'
        });

        // Redirect to the dashboard or any other protected route
        navigate('/Dashboard');
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Header />
        </Col>
      </Row><br /><br />
      <Row>
        <div className="header-signup">
          <h4>Sigin Page</h4>
          SignIn to a world of shopping
        </div>
      </Row>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <form className="form" onSubmit={handlelogin}>
            <div className="flex-column">
              <label className="label">Email </label></div>
            <div className="inputForm">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                {/* Your SVG path for the email icon */}
              </svg>
              <input type="email" className="input" name="email" value={data.email} onChange={login} placeholder="Enter your Email" required />
            </div>

            <div className="flex-column">
              <label className="label">Password </label></div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                {/* Your SVG path for the password icon */}
              </svg>
              <input type="password" className="input" name="password" value={data.password} onChange={login} placeholder="Enter your Password" required />
              <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                {/* Your SVG path for the eye icon */}
              </svg>
            </div>

            <div className="flex-row">
              <div>
                <input type="checkbox" />
                <label>Remember me </label>
              </div>
              <span className="span">Forgot password?</span>
            </div>
            <button className="button-submit" type="submit">SIGN IN</button>
            <p className="p">Don't have an account? <Link to='/Signup' className="span">Sign Up</Link></p>
          </form>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Login;