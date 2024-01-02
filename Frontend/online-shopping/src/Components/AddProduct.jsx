import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
function AddProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [data,setdata]=useState({
    Pname:'',
    Pdecription:'',
    Pprice:'',
    Pdiscountprice:'',
    Pimage:null
  });

   const handlechange=(e)=>{
    const {name,value,files,type}=e.target;
    if(type==='file'){
      setdata({...data,[name]:files[0]});
    }
   else{
    setdata({...data,[name]:value});
   }
   };

   const handlesubmit=async(e)=>{
    e.preventDefault();

    const formdataforapi=new FormData();
    for(const key in data){
      formdataforapi.append(key,data[key]);
    }

    try{
      const response =await axios.post('http://localhost:3001/product',formdataforapi);
      if(response && response.data){
        console.log(response.data)
        Swal.fire({
          icon:'success',
          titel:'success',
          text:'Added successfully!'
          })
      }

    }
    catch(error){
      console.error(error);
    }
   }
  

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handlesubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Product Name" name='Pname' value={data.Pname} onChange={handlechange} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Product Decription</Form.Label>
        <Form.Control type="text" placeholder="Product Decription" name='Pdecription' value={data.Pdecription} onChange={handlechange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" placeholder="Product Price"  name='Pprice' value={data.Pprice} onChange={handlechange}  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Product Discount Price</Form.Label>
        <Form.Control type="text" placeholder="Product Discount Price"  name='Pdiscountprice' value={data.Pdiscountprice} onChange={handlechange}  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="file" name='Pimage' accept='image/*' onChange={handlechange}  required />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type='submit'>
            Save
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddProduct;