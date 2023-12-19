import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from 'react-router-dom';

function Header() {
  return (
     <Navbar collapseOnSelect expand="lg"  bg="primary"data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand style={{fontWeight:'bold',fontSize:'22px',color:'whitesmoke'}}>< MonetizationOnIcon/>Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav  style={{marginLeft:'60vw',fontSize:'16px',gap:'1vw'}}>
            <Link to="/Index"style={{color:'white',textDecoration:'none'}}className='header-hover'><HomeIcon/> Home</Link>
            <Link to="/Shop" style={{color:'white',textDecoration:'none'}} ><ShoppingBagIcon/> Shop </Link>
            <Link to="/" style={{color:'white',textDecoration:'none'}}><ShoppingCartIcon/> Cart</Link>
            <Link to="/Login" style={{color:'white',textDecoration:'none'}}><AccountCircleIcon/> SignIn </Link>
            <Link to="/Signup" style={{color:'white',textDecoration:'none'}}><PersonAddIcon/> Signup</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Header;