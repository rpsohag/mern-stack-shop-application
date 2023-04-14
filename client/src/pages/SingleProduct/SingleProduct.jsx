import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./SingleProduct.scss";
import { AiOutlineHeart } from "react-icons/ai";
import Product from '../../components/Product/Product';

const SingleProduct = () => {
  return (
    <div className='single-product'> 
      <Container>
        <Row>
          <Col md={6}>
       <div className='product-photo'>
       <img src="https://images.samsung.com/is/image/samsung/p6pim/latin_en/sm-a042mlbkgto/gallery/latin-en-galaxy-a04e-sm-a042-442430-sm-a042mlbkgto-534434265?$650_519_PNG$" alt="" />
       </div>
          </Col>
          <Col md={6}>
            <div className="product-info">
              <h1>Product Title</h1>
              <div className="price">
                <div className="reg">200</div>
                <div className="sale">150</div>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, veritatis aliquid obcaecati consectetur, delectus laborum sint corporis voluptate autem at in ut repellendus tenetur sunt assumenda fugit facere distinctio, animi ipsam sit! Delectus quaerat veniam id nesciunt iste sint sunt officia fugit aspernatur atque necessitatibus esse perspiciatis laudantium, assumenda consequuntur.</p>
              </div>
              <span className="stock">20 in stock</span>
              <div className="cart-btn">
                <input type="number" className='form-control cart-input' />
                <button className='cart-button btn btn-warning'>Add to cart</button>
                <button className='wishlist-btn btn'><AiOutlineHeart/></button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <h2>Related Product</h2>
          </Col>
          <Col md="12">
            <div className="related-products">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SingleProduct