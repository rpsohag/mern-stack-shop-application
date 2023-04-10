import React from 'react'
import { Modal } from 'react-bootstrap';
import "./ProductViewModal.scss"

const ProductViewModal = ({ show, onHide }) => {
  return (
   <>
    <Modal show={show} onHide={onHide} centered size='lg'>
        <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="product-quick-view">
                <div className="product-photo">
                    <img src="https://www.bigw.com.au/medias/sys_master/images/images/h13/h98/33633075003422.jpg" alt="" />
                </div>
                <div className="product-details">
                    <h2>Samsung s23 ultra</h2>
                    <hr />
                    <div className='view-pricing'>
                        <span className='regular'>1200</span>
                        <span className='sale'>900</span>
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>
   </>
  )
}

export default ProductViewModal