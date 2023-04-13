import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { AiOutlinePlus } from "react-icons/ai";
import BrandCreateModal from './BrandCreateModal';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrand, statusUpdateBrand } from '../../redux/shop/actions';
import swal from 'sweetalert';
import toast, { Toaster } from 'react-hot-toast';
import BrandUpdateModal from './BrandUpdateModal';


const Brand = () => {
    const [modal, setModal ] = useState(false);
    const [updateModal, setUpdateModal ] = useState(false);
    const [updateId, setUpdateId ] = useState(null);
    const [status, setStatus ] = useState(true);
    const { brands } = useSelector((state) => state.shop);
    const dispatch = useDispatch();
    const deleteProductBrand = (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          toast.success('This Brand Deleted Successfully!')
          dispatch(deleteBrand(id));
        }
      });
    }

    const handleStatusUpdate= (id, status) => {
      dispatch(statusUpdateBrand({id, status : !status}))
      toast.success('Status Updated Successfully!')
    } 
  return (
    <div className='table-content'>
        <div className="table-content-header">
            <h2>Brands</h2>
            <button onClick={() => setModal(true)}> <AiOutlinePlus/> Create new brand</button>
        </div>
        <div className="table-content-list">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Logo</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { brands.map(({_id, name,photo, status}, index) => {
                  return (   <tr key={index}>
                    <td>1</td>
                    <td>{name}</td>
                    <td><img style={{ width: "40px", height: "40px", objectFit: "cover"}} src={`http://localhost:5050/uploads/brands/${photo}`} alt="" /></td>
                    <td>
                      <Form.Check onChange={() => handleStatusUpdate(_id, status)} type='switch' id='custom-switch' label='' checked={status}/>
                    </td>
                    <td>
                      <Button className='btn-sm' variant='warning' onClick={() => setUpdateModal(true)}>
                        <FiEdit/>
                      </Button>
                      &nbsp;
                      <Button className='btn-sm' variant='danger' onClick={() => deleteProductBrand(_id)}>
                        <FiTrash2/>
                      </Button>
                    </td>
                  </tr>)
               
                })}
              </tbody>
            </Table>
        </div>
            <BrandUpdateModal show={updateModal} onHide={() => setUpdateModal(false)}/>
            <BrandCreateModal setModal={setModal} show={modal} onHide={() => setModal(false)}/>
            <Toaster/>
    </div>
  )
}

export default Brand