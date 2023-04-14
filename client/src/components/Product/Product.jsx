import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductViewModal from '../ProductViewModal/ProductViewModal';
import "./Product.scss"

const Product = () => {
    const [ show, setShow ] = useState(false)
  return (
    <div className='product-item'>
        <ProductViewModal show={show} onHide={ () => setShow(false)}/>
        <Card>
            <Link to="/slug">
                <Card.Img src='https://www.bigw.com.au/medias/sys_master/images/images/h13/h98/33633075003422.jpg'></Card.Img>
            </Link>
            <Card.Body>
                <Link to="/slug">Samsung Galaxy Watch 4 Smartwatch 44mm</Link>
                <div className='pricing d-flex justify-content-center align-items-center'>
                    <span className='regular h6'>$ 900</span>
                    <span className='sale h5'>$ 1200</span>
                </div>
                <div className='product-button'>
                    <button variant="primary" className='cart-btn btn btn-warning'>Add to Cart</button> 
                    &nbsp;
                    <button variant="info" onClick={() => setShow(true)} className="btn btn-dark">View</button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Product