import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer(){
    return(
      <Container fluid>
        <Row>
          <Col sm={12}>
                   <div className="footer-row-1">
                         <a 
                          className="footer-icon-a"
                          href="https://www.facebook.com/profile.php?id=100035128890560"
                          role="button"
                          data-mdb-ripple-color="dark"
                          >< FacebookIcon/></a>
                  
                    
                        <a
                          className="footer-icon-a"
                          href="https://twitter.com/TripathiRitish"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><TwitterIcon/></a>
                  
                   
                        <a
                          className="footer-icon-a"
                          href="https://www.google.com/search?q=ritish+tripathi&oq=ritish++tri&aqs=chrome.1.69i57j0i512j0i10i512l3j69i60l3.7649j0j7&sourceid=chrome&ie=UTF-8"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><GoogleIcon/></a>
                  
                   
                        <a
                          className="footer-icon-a"
                          href="https://www.instagram.com/ritishtripathiofficial/"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><InstagramIcon/></a>
                  
                 
                        <a
                          className="footer-icon-a"
                          href="https://www.linkedin.com/in/ritish-tripathi-32701224b/"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><LinkedInIcon/></a>
                          </div>
               </Col>
           </Row>
        <Row>
        <Col sm={12}>
        <div className="footer-row-2">
            <span>Copyright © and develope By 2023 <a href="https://www.google.com/search?q=ritish+tripathi&oq=ritish&aqs=chrome.0.69i59l3j0i512l2j46i10i340i512j69i64j69i61.1734j0j7&sourceid=chrome&ie=UTF-8#vhid=mydzcUs4Fyi1RM&vssid=l">Ritish Tripathi</a>
     </span>
               </div>
        </Col>
        </Row>
      </Container>
         
    )
}
export default Footer;