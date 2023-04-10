import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <>
     <header>
        <Container>
            <Row>
                <Col md={3}>
                    <div className='logo'>
                        <Link to="/">
                            <img className='brand-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/00/Spotify_logo_horizontal_white.jpg" alt="" />
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
        </header>
    </>
  )
}

export default Header