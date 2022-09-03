import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../image/dumbflix.png';
import image2 from '../image/Ellipse 1.png';
import image3 from '../image/Vector.png';
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
                                <Nav >
                                    <img
                                        alt=""
                                        src={image2}
                                        width="40"
                                        backgroundColor={"black"}
                                        height="40"

                                    />{' '}
                                    <NavDropdown >
                                        <NavDropdown.Item href="/listfilm" className='d-flex '>
                                            <img src={image3} />
                                            <p className='text-danger  mx-2 mt-3 mb-2'>Film</p>
                                        </NavDropdown.Item>
                                        <hr></hr>
                                        <NavDropdown.Item href="#action/3.2" > <p className='text-danger'>Logout</p>
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

