import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { AiOutlinePlus } from "react-icons/ai";
import BrandModal from './BrandModal';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrand } from '../../redux/shop/actions';

const Brand = () => {
    const [modal, setModal ] = useState(false);
    const [status, setStatus ] = useState(true);
    const { brands } = useSelector((state) => state.shop);
    const dispatch = useDispatch();
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
                { brands.map(({_id, name,slug,photo}, index) => {
                  return (   <tr key={index}>
                    <td>1</td>
                    <td>{name}</td>
                    <td><img style={{ width: "40px", height: "40px", objectFit: "cover"}} src={`http://localhost:5050/uploads/brands/${photo}`} alt="" /></td>
                    <td>
                      <Form.Check onClick={() => setStatus(!status)} type='switch' id='custom-switch' label={status ? "publish" : "unpublish"} checked={status} />
                    </td>
                    <td>
                      <Button className='btn-sm' variant='warning'>
                        <FiEdit/>
                      </Button>
                      &nbsp;
                      <Button className='btn-sm' variant='danger' onClick={() => dispatch(deleteBrand(_id))}>
                        <FiTrash2/>
                      </Button>
                    </td>
                  </tr>)
               
                })}
              </tbody>
            </Table>
        </div>
            <BrandModal setModal={setModal} show={modal} onHide={() => setModal(false)}/>
    </div>
  )
}

export default Brand