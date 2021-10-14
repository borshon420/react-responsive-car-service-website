import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        
        <>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Car Experts</Navbar.Brand>
            
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#experts">Experts</Nav.Link>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    );
};

export default Header;