import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand, UpdateBrand } from '../../redux/shop/actions';

const BrandModal = ({show, onHide, setModal, type, dataId}) => {
  const [input, setInput ] = useState("");
  const [logo, setLogo ] = useState(null);
  const [edit, setEdit] = useState({
    name : "",
    photo : ""
  })
  const dispatch  = useDispatch();
  const { brands } = useSelector((state) => state.shop);
  const handleLogoUpload = e => {
    setLogo(e.target.files[0]);
  }

  // get edit data
  
  useEffect(() => {
    const editData = brands.find(data => data._id === dataId)
    setEdit(editData)
  }, [dataId, brands])


  const handleCreateBrand = async (e) => {
    e.preventDefault();

  const form_data = new FormData();
  form_data.append("name", input);    
  form_data.append("brand-photo", logo);    
   dispatch(createBrand({data: form_data, setModal, setInput, setLogo}))
   e.target.reset()
   toast.success('Brand Created Successfully!')
  }
  const handleModalOnHide = () => {
    onHide();
    setLogo(null)
  }
  const handleUpdateBrand = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("name", edit?.name);
    form_data.append("photo", edit?.photo);
    form_data.append("brand-photo", logo)
    dispatch(UpdateBrand({data : form_data, id : dataId, setModal }))
  }
 if(type === 'create'){
  return (
    <div>
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>Add Brand</Modal.Header>
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
        <Toaster />
    </div>
  )
 }else if(type === 'edit'){
  return (
    <div>
        <Modal show={show} onHide={handleModalOnHide}>
            <Modal.Header closeButton>Update Brand</Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleUpdateBrand}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Brand Name" value={edit?.name} onChange={(e) => setEdit((prevState) => ({...prevState, name : e.target.value}))} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand Logo</Form.Label>
                <Form.Control onChange={handleLogoUpload} name="brand-photo" type="file" />
                <br />

                { logo ? (<img style={{width: "100%"}} src={URL.createObjectURL(logo)} alt="" /> ): (edit?.photo && <img style={{width: "100%"}} src={`http://localhost:5050/uploads/brands/${edit?.photo}`} alt="" />)}

              </Form.Group>
              <Button variant="primary" type="submit">
                Add Brand
              </Button>
            </Form>
            </Modal.Body>
        </Modal>
        <Toaster />
    </div>
  )
 }
}

export default BrandModal