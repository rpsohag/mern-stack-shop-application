import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const BrandModal = ({show, onHide}) => {
  const [input, setInput ] = useState("");
  const [logo, setLogo ] = useState(null);
  const handleLogoUpload = e => {
    setLogo(e.target.files[0]);
    console.log(e.target.files[0])
  }
  const handleCreateBrand = async (e) => {
    e.preventDefault();

  const form_data = new FormData();
  form_data.append("name", input);    
  form_data.append("brand-logo", logo);    
    await axios.post("").then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleCreateBrand}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Brand Name" value={input} onChange={(e) => setInput(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand Logo</Form.Label>
                <Form.Control onChange={handleLogoUpload} type="file" />
                <br />
                { logo && <img style={{width: "100%"}} src={URL.createObjectURL(logo)} alt="" />}
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Brand
              </Button>
            </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default BrandModal