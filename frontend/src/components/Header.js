import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
           <Navbar bg="dark" varient='dark' expand="lg" collapseOnSelect>
  <Navbar.Brand href="/">YourShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
      <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </header>
    )
}

export default Header
