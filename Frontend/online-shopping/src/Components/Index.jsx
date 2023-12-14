import React from "react";
import Button from 'react-bootstrap/Button';
import SearchIcon from '@mui/icons-material/Search';
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
const Index=()=>{
    return(
        <>

        {/* these are Navbars */}

       <Header/>

       <div className="header-signup">
        <h4>Home Page</h4>
        Welcome to the world of fassion
     </div><br/><br/>


  {/* this is search box */}


     <div className="search-div-box">
        <select className="select-item">
            <option>select</option>
            <option>mobiles</option>
            <option>laptops</option>
            <option>smart watches</option>
        </select><SearchIcon style={{marginTop:'2vh'}}/>
        <input type="search" className="search-box" placeholder="Search here..."/>
        <Button variant="primary">SEARCH</Button>
     </div><br/><br/><br/><br/>
     
     {/* here is component of all items */}

       <Items/><br/><br/>
       <Footer/>
        </>
    )
}
export default Index;