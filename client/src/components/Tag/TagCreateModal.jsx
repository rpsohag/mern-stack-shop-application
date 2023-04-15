import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { createTag } from '../../redux/tag/actions';

const TagCreateModal = ({show, onHide}) => {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();
    const handleCreateTag = (e) => {
        e.preventDefault();
        dispatch(createTag({data: {
            "name" : input
        }, setInput}))
        onHide()
    }
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>Create Tag</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleCreateTag}>
                <Form.Group>
                    <Form.Label>Tag Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter tag name' value={input} onChange={(e) => setInput(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant="primary" className='btn float-end my-3'>Create Tag</Button>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default TagCreateModal