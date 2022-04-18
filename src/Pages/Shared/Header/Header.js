import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect sticky='top' expand="md" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    GoTechDoctor
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ? 
                            <Nav.Link onClick={handleSignOut}>Log out</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;