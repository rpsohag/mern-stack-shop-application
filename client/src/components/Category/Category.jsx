import React, { useState } from 'react';
import {Table, Form } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import CategoryCreateModal from './CategoryCreateModal';

const Category = () => {
  const [createModal, setCreateModal ] = useState(false);
  const { categories } = useSelector((state) => state.category)

  return (
    <div className='table-content'>
      <div className="table-content-header">
        <h2>Category</h2>
        <button onClick={() => setCreateModal(true)}>Create New Category</button>
      </div>
      <div className="table-content-list">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {categories.map((item, index) => {
            return (
              <tr className='d-fle' key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td><img style={{width: "40px", height: "40px", objectFit: "cover"}} src={`http://localhost:5050/uploads/categories/${item.photo}`} alt="" /></td>
              <td>
                <Form.Check type='switch' id='custom-switch' className='align-self-center'></Form.Check>
              </td>
              <td>
                <button className='btn btn-sm btn-warning'><FiEdit/></button>
                <button className='btn btn-sm btn-danger mx-2'><FiTrash2/></button>
              </td>
            </tr>
            )
          })}
          
          </tbody>
        </Table>
        <CategoryCreateModal show={createModal} onHide={() => setCreateModal(false)} />
        <Toaster/>
      </div>
    </div>
  )
}

export default Category