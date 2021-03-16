import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' varient='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/' className='text-light'>
            E-Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart' className='text-light'>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login' className='text-light'>
                <i className='fas fa-user'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
