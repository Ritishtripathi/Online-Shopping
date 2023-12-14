import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import laptop from './images/l10.jpeg';
import iphone12 from './images/iphone13.jpg';
import earbird from './images/e2.jpeg';
import smart from './images/sw1.jpeg';
import swa from './images/swa.jpg';
import speaker from './images/s5.jpg';
import e3 from './images/oppok10.jpg';
import fan from './images/wm3.jpg';
function Items() {
  return (
    <Container>
       <h3>New Arrivals!</h3><br/><br/>
      <Row>
        {/* //card start from here */}
        <Col sm={3}>
        <Card sx={{ maxWidth: 250 }}>
      <img src={laptop} height="190"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Macbook air
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span style={{fontSize:'13px'}}>APPLE 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN93HN/A  (13.3 inch, Silver, 1.29 kg)</span><br/><br/>
          <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹72,990</h5><strike style={{marginTop:'5px'}}>₹99,900</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
        </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>

  {/* //card start from here */}
  <Col sm={3}>
        <Card sx={{ maxWidth: 260 }}>
        <img src={iphone12} height="190" style={{marginLeft:'2vw'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          iphone15 pro max
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span style={{fontSize:'13px'}}>APPLE iPhone 15 Pro Max (Black Titanium, 256 GB)Handset, Model Number MU7A3HN/A Model Name iPhone 15 Pro Max </span><br/><br/>
          <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹1,00999</h5><strike style={{marginTop:'5px'}}>₹ 1,29000</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
        </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>



          {/* //card start from here */}
          <Col sm={3}>
        <Card sx={{ maxWidth: 250 }}>
        <img src={earbird} height="190" style={{marginLeft:'2vw'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Head-phone
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span style={{fontSize:'13px'}}>Specifications General Model Name Rockerz 650 Color Techno Purple Sales Package, Warranty Card Connectivity Bluetooth</span><br/><br/>
          <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹4,999.00</h5><strike style={{marginTop:'5px'}}>₹9,999</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
          </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>


          {/* //card start from here */}
          <Col sm={3}>

        <Card sx={{ maxWidth: 245 }}>
        <img src={smart} height="190"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Smart Watch
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span style={{fontSize:'13px'}}>Gamesir I8 Pink-A1 Full Screen Touch Watch Specially Made for Girl & Women Smartwatch  (Pink Strap, 1.75 Inch )</span><br/><br/>
          <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹5,999</h5><strike style={{marginTop:'5px'}}>₹ 9,999</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
         </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>
      </Row>
     


     {/* second row start from here */}



     <Row style={{marginTop:'5vh'}}>
        {/* //card start from here */}
        <Col sm={3}>
        <Card sx={{ maxWidth: 245 }}>
      <img src={swa} height="190"style={{marginLeft:'2vw'}}/>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          Smart Watch<h6>woman watches</h6>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹5,999</h5><strike style={{marginTop:'5px'}}>₹ 9,999</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
         </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>

  {/* //card start from here */}
  <Col sm={3}>
        <Card sx={{ maxWidth: 245 }}>
        <img src={e3} height="190" style={{marginLeft:'2vw'}}/>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          Oppo F21 pro<h6>5G mobiles</h6>
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹15,999</h5><strike style={{marginTop:'5px'}}>₹ 19,999</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
         </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>



          {/* //card start from here */}
          <Col sm={3}>
        <Card sx={{ maxWidth: 245 }}>
        <img src={speaker} height="190" style={{marginLeft:'3vw'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Boat Sperkers<h6>blutooth devices</h6>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹3,999.00</h5><strike style={{marginTop:'5px'}}>₹7,999</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
           </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>


          {/* //card start from here */}
          <Col sm={3}>

        <Card sx={{ maxWidth: 255 }}>
        <img src={fan} height="190" style={{marginLeft:'3vw'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Washing Machine<h6>home</h6>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p style={{color:'green',fontSize:'18px'}}>Special price</p>
          <span style={{display:'flex',gap:'8px'}}>
           <h5 style={{color:'black'}}>₹9,999.00</h5><strike style={{marginTop:'5px'}}>₹19,999</strike> <p style={{color:'green',fontSize:'18px'}}> 26% off</p></span>
           </Typography>
      </CardContent>
      <CardActions style={{gap:'2vw'}}>
        <button size="small" className="add-to-cart-btn">Add to cart</button>
        <button size="small" className="order-now-btn">Order Now</button>
      </CardActions>
    </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default Items;