
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

  import { Link, NavLink  } from 'react-router-dom';
function Header(props) {
    
    return (      
        <Navbar fixed="top" bg="light" expand="lg" >
            <Navbar.Brand as={Link} to="/home">Eduvanz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <NavLink activeClassName="active" className="nav-link" as={Link} to="/"></NavLink>
                    <NavLink activeClassName="active" className="nav-link" as={Link} to="/home">Registration</NavLink>
                    <NavLink activeClassName="active" className="nav-link" as={Link} to="/admin">Admin</NavLink>
                    <NavLink activeClassName="active" className="nav-link" as={Link} to="/reports">Reports</NavLink>    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        );
  };
  export default Header;
  