import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Shop.scss"
import Product from '../../components/Product/Product';
import Sidebar from '../../components/Sidebar/Sidebar';

const Shop = () => {
  return (
    <>
       <section className='mt-5'>
        <Container>
            <Row>
                <Col md={3}>
                    <Sidebar/>
                </Col>
                <Col md={9}>
                    <div className='shop-items-wrapper'>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    </>
  )
}

export default Shop