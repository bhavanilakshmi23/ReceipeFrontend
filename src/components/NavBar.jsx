import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (<Navbar  className='titlebar'> 
       <Container>
          <Navbar.Brand href="/home" className='title'>Receipe Book</Navbar.Brand>
          <Nav className="justify-content-end titleitems">
            <Nav.Link href="/home" >Home</Nav.Link>
                <Nav.Link href="/receipelist">Receipes</Nav.Link>
                <Nav.Link href="/receipes/AddReceipes">Create</Nav.Link>
            <Nav.Link href="/signin">signout</Nav.Link>
          </Nav>
      </Container>
  </Navbar>
  )
}

export default NavBar

