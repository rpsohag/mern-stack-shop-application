import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { Toaster } from 'react-hot-toast'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import TagCreateModal from './TagCreateModal'

const Tag = () => {
  const [createModal, setCreateModal ] = useState(false);
  const { tags } = useSelector((state) => state.tag)
  const handleStatusUpdate = (id, status) => {

  }
  return (
    <div className='table-content'>
        <div className="table-content-header">
          <h3>Tag</h3>
          <button onClick={() => setCreateModal(true)}>Create Tag</button>
        </div>
        <div className="table-content-list">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Tag</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {tags.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td><Form.Check type='switch' onChange={() => handleStatusUpdate(item._id, item.status)} checked={item.status}></Form.Check></td>
                  <td>
                    <button className='btn btn-sm btn-warning mx-1'><FiEdit/></button>
                    <button className='btn btn-sm btn-danger'><FiTrash2/></button>
                  </td>
              </tr>
              )
             })}
            </tbody>
          </Table>
          <TagCreateModal show={createModal} onHide={() => setCreateModal(false)}/>
          <Toaster/>
        </div>
    </div>
  )
}

export default Tag