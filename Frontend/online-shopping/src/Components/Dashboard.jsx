import React,{useState,useEffect} from "react";
import { Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";

function Dashboard(){
// display data from local storage


console.log("get data ",localStorage
);
  const storedata =localStorage.getItem('data');
  const data=storedata ? JSON.parse(storedata): null;
  console.log("GETDATA BY LOCALSTORAGE",data);
  const email=data.email;
  console.log("gmail",email);



  // get user data by using api call
  
    const [userData, setUserData] = useState([]);
  
    useEffect(() => { 
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/user/data');
          setUserData(response.data.user);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


    return(
        <Container fluid>
            
            <Row>
          <div className="header-signup">
        <h4>Dashboard</h4>
        Welcome {email}     </div>
        </Row>
            <br/><br/>
            <Row>
                <Col sm={3}>
                     <Card style={{ width: '18rem'}}>
                      <ListGroup variant="flush">
                      <ListGroup.Item><h4>User links</h4></ListGroup.Item>
                      <ListGroup.Item><Link to='/Shop' style={{textDecoration:'none'}}>My Cart</Link></ListGroup.Item>
                      <ListGroup.Item><Link to='/Dashboard' style={{textDecoration:'none'}}>Update Profile</Link></ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>
                <Col sm={9}>
                  <table  style={{ width: '65vw'}} border={1}>
                    <thead>
                    <tr style={{border:'1px solid gray',height:'7vh'}}>
                        <th><h4>User information</h4></th>
                  </tr>
                    </thead>
                   
                  {userData.map(user => (
                    <tbody>
                           <tr style={{border:'1px solid gray',height:'7vh'}} key={user._id}>
                               <td>{user.name}</td>
                            </tr>
                            <tr style={{border:'1px solid gray',height:'7vh'}}>
                               <td>{user.email}</td>
                            </tr>
                            <tr style={{border:'1px solid gray',height:'7vh'}}>
                               <td>{user.password}</td>
                            </tr>
                    </tbody>      
                  ))}
                  </table>

                </Col>
            </Row><br/><br />
            <Row>
                <Col sm={3}></Col>
                <Col sm={9}>
                  <table  style={{ width: '65vw'}} border={1}>
                    <tr style={{border:'1px solid gray',height:'7vh'}}>
                        <th><h4>Purchase hestory</h4></th>
                  </tr>
                  <tr style={{border:'1px solid gray',height:'7vh'}}>
                    <td></td>
                  </tr>

                  </table>

                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard;