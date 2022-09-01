import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../image/dumbflix.png';
import image2 from '../image/Ellipse 1.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Listtrans() {
    return (

        <Navbar sticky="top" className='bg-dark' variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={image1}
                        width="70"
                        backgroundColor={"black"}
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand >
                    <Navbar variant="dark" bg="dark" expand="lg">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbar-black-example" />
                            <Navbar.Collapse id="navbar-black-example">
                                <Nav>
                                    <img
                                        alt=""
                                        src={image2}
                                        width="40"
                                        backgroundColor={"black"}
                                        height="40"

                                    />{' '}
                                    <NavDropdown>
                                        <NavDropdown.Item href="/listfilm">Film</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">  logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>





                </Navbar.Brand>
            </Container>
        </Navbar>


    )
}

