import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { Link } from 'react-router-dom';

function Header2() {
  return (
     <Navbar collapseOnSelect expand="lg"  bg="primary"data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand style={{fontWeight:'bold',fontSize:'22px',color:'whitesmoke'}}>< MonetizationOnIcon/>Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav  style={{marginLeft:'60vw',fontSize:'16px',gap:'1vw'}}>
            <Link to="/Items"style={{color:'white',textDecoration:'none'}}className='header-hover'><HomeIcon/> Home</Link>
            <Link to="" style={{color:'white',textDecoration:'none'}} ><ShoppingBagIcon/> Shop </Link>
            <Link to="" style={{color:'white',textDecoration:'none'}}><ShoppingCartIcon/> Cart</Link>
            <Link to="/Dashboard" style={{color:'white',textDecoration:'none'}}><SpaceDashboardIcon/> Dashboard</Link>
            <Link to="/" style={{color:'white',textDecoration:'none'}}><LogoutIcon/> Sign Out</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Header2;