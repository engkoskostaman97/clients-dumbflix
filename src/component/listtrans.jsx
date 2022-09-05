import React from 'react'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown'

import Navbar from 'react-bootstrap/Navbar';
import image1 from '../image/dumbflix.png';
import image2 from '../image/Ellipse 1.png';
import image3 from '../image/Vector.png';
import Nav from 'react-bootstrap/Nav';
import image4 from '../image/logout1.png';



export default function Listtrans() {
    return (

        <Navbar bg="dark" expand="lg" className="sticky-sm-top">
            <Container variant="dark">
                <Navbar.Brand href="/list">
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
                    <Navbar variant="dark" bg="dark" expand="lg" >
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbar-black-example" className='bg-dark' />
                            <Navbar.Collapse id="navbar-black-example" className='bg-dark'>
                                <Nav >
                                    <img
                                        alt=""
                                        src={image2}
                                        width="40"
                                        backgroundColor={"black"}
                                        height="40"

                                    />{' '}



                                    <NavDropdown variant="dark" className=" me-5">


                                        <NavDropdown.Item href="/listfilm" className='d-flex '>
                                            <img src={image3} alt="image3" />
                                            <p className='text-danger  mx-2 mt-3 mb-2'>Film</p>
                                        </NavDropdown.Item>
                                        <hr ></hr>
                                        <NavDropdown.Item href="/list" className='d-flex ' >
                                            <img src={image4} alt="image4" />
                                            <p className='text-danger  mx-2 mt-3 mb-2'>Log out</p>
                                        </NavDropdown.Item>


                                    </NavDropdown>





                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>





                </Navbar.Brand>
            </Container>
        </Navbar >


    )
}

