import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../redux/shop/actions';

const BrandUpdateModal = ({show,onHide}) => {
  return (
    <div>
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Brand Name"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand Logo</Form.Label>
                <Form.Control name="brand-photo" type="file" />
               
              </Form.Group>
              <Button variant="primary" type="submit" style={{float: "right"}}>
                Update Brand
              </Button>
            </Form>
            </Modal.Body>
        </Modal>
        <Toaster />
    </div>
  )
}

export default BrandUpdateModal