import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { createCategory } from '../../redux/category/actions';

const CategoryCreateModal = ({show, onHide}) => {
  const [input, setInput ] = useState("");
  const [photo, setPhoto ] = useState(null);
  const dispatch = useDispatch();

  const handleCreateCategory = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("name", input);
    form_data.append("category-photo", photo);
    dispatch(createCategory({data : form_data, setInput, setPhoto}));
    onHide()
  }

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0])
  }


  return (
    <div>
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>Create Category</Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleCreateCategory}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Category Name" value={input} onChange={(e) => setInput(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category Photo</Form.Label>
                <Form.Control onChange={handlePhotoUpload} name="category-photo" type="file" />
                <br />
                { photo && <img style={{width: "100%"}} src={URL.createObjectURL(photo)} alt="" />}
              </Form.Group>
              <Button variant="primary" type="submit" className="float-end">
                Add Category
              </Button>
            </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default CategoryCreateModal