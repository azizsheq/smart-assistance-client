import React from 'react';
import './NavBar.css';
import { useContext } from 'react';
import { Badge, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../../images/sa-logo.png';

const NavBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg="" expand="lg">
            {/* <img src={logo} alt="sa logo" style={{height: "40px", width: "40px"}}/> */}
            <Navbar.Brand href="/home">Smart Assistance</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/home">Home</Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/home">Projects</Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/home">Services</Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/home">Admin</Link>
                </Nav>
                <Nav>
                    {
                        loggedInUser.email 
                        ? <Badge variant="">
                            <FontAwesomeIcon icon={faUserAlt} size="2x" color="blue"/>&nbsp;{loggedInUser.name}
                        </Badge>
                        : <Badge className="badge" variant="">
                            <FontAwesomeIcon icon={faUser} size="2x"/>
                        </Badge>
                    }
                    <Link to="/login">
                        <Button onClick={() => setLoggedInUser({})}>
                            {
                                loggedInUser.email ? 'Log Out' : 'Log In'
                            }
                        </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;