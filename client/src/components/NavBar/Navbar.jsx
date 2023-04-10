import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <>
        <nav className='menu'>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/">Shop</NavLink></li>
                            <li><NavLink to="/wishlist">WishList</NavLink></li>
                            <li><NavLink to="/cart">Cart</NavLink></li>
                            <li><NavLink to="/admin">Admin</NavLink></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </nav>
    </>
  )
}

export default Navbar