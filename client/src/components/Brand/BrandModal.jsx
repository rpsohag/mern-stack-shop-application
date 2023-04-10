import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../redux/shop/actions';

const BrandModal = ({show, onHide, setModal}) => {
  const [input, setInput ] = useState("");
  const [logo, setLogo ] = useState(null);
  const dispatch  = useDispatch();
  const handleLogoUpload = e => {
    setLogo(e.target.files[0]);
  }
  const handleCreateBrand = async (e) => {
    e.preventDefault();

  const form_data = new FormData();
  form_data.append("name", input);    
  form_data.append("brand-photo", logo);    
   dispatch(createBrand({data: form_data, setModal, setInput, setLogo}))
   e.target.reset()
  }
  return (
    <div>
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleCreateBrand}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Brand Name" value={input} onChange={(e) => setInput(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand Logo</Form.Label>
                <Form.Control onChange={handleLogoUpload} name="brand-photo" type="file" />
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