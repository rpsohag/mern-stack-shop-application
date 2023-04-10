import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { AiOutlinePlus } from "react-icons/ai";
import BrandModal from './BrandModal';
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Brand = () => {
    const [modal, setModal ] = useState(false);
    const [status, setStatus ] = useState(true);
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
                <tr>
                  <td>1</td>
                  <td>Apple</td>
                  <td><img style={{ width: "40px", height: "40px", objectFit: "cover"}} src="https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png" alt="" /></td>
                  <td>
                    <Form.Check onClick={() => setStatus(!status)} type='switch' id='custom-switch' label={status ? "publish" : "unpublish"} checked={status} />
                  </td>
                  <td>
                    <Button className='btn-sm' variant='warning'>
                      <FiEdit/>
                    </Button>
                    &nbsp;
                    <Button className='btn-sm' variant='danger'>
                      <FiTrash2/>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
        </div>
            <BrandModal show={modal} onHide={() => setModal(false)}/>
    </div>
  )
}

export default Brand