import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Header.scss";
import logo from './../../assets/logo.png';

const Header = () => {
  return (
    <>
     <header>
        <Container>
            <Row className='d-flex justify-content-between'>
                <Col className="d-flex justify-content-between align-items-center">
                    <div className='logo'>
                        <Link to="/">
                            <img className='brand-logo' src={logo} alt="" />
                        </Link>
                    </div>
                      <div className="search-box d-flex gap-2">
                        <input type="text" className='form-control' placeholder='Search here.....' />
                        <input type="submit" value="submit" className='btn search-btn' />
                    </div>
                </Col>
            </Row>
        </Container>
        </header>
    </>
  )
}

export default Header