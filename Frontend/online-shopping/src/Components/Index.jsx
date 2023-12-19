import React from "react";
import Button from 'react-bootstrap/Button';
import SearchIcon from '@mui/icons-material/Search';
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import  {Col}  from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Index=()=>{
    return(
        <Container fluid>
        {/* these are Navbars */}
        <Row>
            <Col sm={12}><Header/></Col>
        </Row><br/><br/>
    
       <Row>
               <div className="header-signup">
                   <h4>Home Page</h4>
                     Welcome to the world of fassion
               </div>
        </Row> <br/><br/>

         {/* this is search box */}


      <Row>
        <Col sm={3}></Col>
        <Col sm={5}>
        <div className="search-div-box">
        <select className="select-item">
            <option>select</option>
            <option>mobiles</option>
            <option>laptops</option>
            <option>smart watches</option>
        </select><SearchIcon style={{marginTop:'2vh'}}/>
        <input type="search" className="search-box" placeholder="Search here..."/>
        <Button variant="primary">SEARCH</Button>
     </div>
        </Col>
        <Col sm={4}></Col>
      </Row><br/><br/><br/><br/>
        {/* here is component of all items */}
       <Row>
        <Col sm={12}>
      
            <Items/>
        </Col>
       </Row><br/><br/>
       <Row>
        <Footer/>
       </Row>
        </Container>
    )
}
export default Index;