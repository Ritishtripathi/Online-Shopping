import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function Header() {
  return (
     <Navbar collapseOnSelect expand="lg"  bg="primary"data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand style={{fontWeight:'bold',fontSize:'22px',color:'whitesmoke'}}>< MonetizationOnIcon/>Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav  style={{marginLeft:'60vw',fontSize:'16px'}}>
            <Nav.Link href="#deets"style={{color:'white'}} ><HomeIcon/>Home</Nav.Link>
            <Nav.Link href="#memes" style={{color:'white'}} ><ShoppingBagIcon/>Shop </Nav.Link>
            <Nav.Link href="#deets" style={{color:'white'}}><ShoppingCartIcon/>Cart</Nav.Link>
            <Nav.Link href="#memes" style={{color:'white'}}><AccountCircleIcon/> SignIn </Nav.Link>
            <Nav.Link href="#deets" style={{color:'white'}}><PersonAddIcon/>Signup</Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Header;