import React from "react";
import { Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
function  Shop(){
    return(
        <Container fluid>
             <Row>
          <Col sm={12}>
                 <Header/>
          </Col>
        </Row><br/><br/><br/><br/><br/>

         <Row>
            <Col sm={2}>
            <h5>Filter by price range</h5>
          <ul type='none'>
            <li><input type="checkbox"/> Laptop</li>
            <li><input type="checkbox"/> Mobiles</li>
            <li><input type="checkbox"/> Smart-Watches</li>
          </ul>

          <h5>Filter by price range</h5>
          <ul type='none'>
            <li><input type="radio" name='a'/> Any</li>
            <li><input type="radio"name='a'/> ₹0 to ₹750</li>
            <li><input type="radio"name='a'/> ₹1000 to ₹1500</li>
            <li><input type="radio"name='a'/> ₹1500 to ₹2500</li>
            <li><input type="radio"name='a'/> ₹10,000 to ₹15,000</li>
            <li><input type="radio"name='a'/> more than 1,0000</li>
          </ul>
            </Col>
            
   {/* Card start from here */}

        <Col sm={10}>
            <Items/>
        </Col>
           
         </Row><br/><br/><br/>
         <Row>
         <Footer/>
         </Row>
        </Container>
    )
}
export default Shop;