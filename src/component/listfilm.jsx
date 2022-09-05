import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import gambar1 from '../image/Rectangle6.jpg';
import gambar2 from '../image/Rectangle1.jpg';
import gambar3 from '../image/Rectangle2.jpg';
import gambar4 from '../image/Rectangle3.jpg';
import gambar5 from '../image/Rectangle4.jpg';
import gambar6 from '../image/Rectangle5.jpg';
import gambar7 from '../image/Rectangle66.jpg';
import gambar8 from '../image/Rectangle7.jpg';
import gambar9 from '../image/Rectangle8.jpg';
import gambar10 from '../image/Rectangle9.jpg';
import gambar11 from '../image/Rectangle10.jpg';
import gambar12 from '../image/Rectangle11.jpg';
import Button from 'react-bootstrap/Button';

function Listfilm() {
    return (
        <div>
            <div style={{ backgroundColor: "black" }} className='d-flex'>
                <div className='d-flex'>
                    <h2 className='text-light'> List Film</h2>
                </div>

                <div className='d-flex btn btn-outline-dark mt-1'>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline" id="dropdown-basic">
                            Categori
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/listfilm" for="tvseries">TV Series</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Movies</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='d-flex ms-auto p-2'>
                    <Button className='btn btn-danger' href="./addfilm" type="submit">Add FIlm</Button>{' '}
                </div>
            </div>
            <div style={{ backgroundColor: "black" }}>
                <CardGroup>
                    <h2 className='text-light mb-10 ' id="tvseries"> TV Series</h2>
                    <div className='d-flex mx-auto mt-5 pt-5'>
                        <Link to='/listdetail' style={{ textDecoration: "none" }}>
                            <Card style={{ backgroundColor: "black" }} className="px-2">
                                <Card.Img variant="top" src={gambar1} />
                                <Card.Body className='text-light'>

                                    <Card.Title>The Witcher</Card.Title>
                                    <Card.Text>
                                        2019
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar2} />
                            <Card.Body className='text-light'>
                                <Card.Title>Persona 3 The Movie</Card.Title>
                                <Card.Text>
                                    2016
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar3} />
                            <Card.Body className='text-light'>
                                <Card.Title>Game Of Thrones</Card.Title>
                                <Card.Text>
                                    2011
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar4} />
                            <Card.Body className='text-light'>
                                <Card.Title className='href = ./listdetail'>Money Heist</Card.Title>
                                <Card.Text>
                                    2013
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar5} />
                            <Card.Body className='text-light'>
                                <Card.Title>Touch</Card.Title>
                                <Card.Text>
                                    2020
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar6} />
                            <Card.Body className='text-light'>
                                <Card.Title>Arrow</Card.Title>
                                <Card.Text>
                                    2012
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </CardGroup>
                <CardGroup>
                    <div className='d-flex mx-auto mt-5 pt-5'>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar7} />
                            <Card.Body className='text-light'>
                                <Card.Title>You</Card.Title>
                                <Card.Text>
                                    2018
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar8} />
                            <Card.Body className='text-light'>
                                <Card.Title>Castlevania</Card.Title>
                                <Card.Text>
                                    2017
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar9} />
                            <Card.Body className='text-light'>
                                <Card.Title>The OA</Card.Title>
                                <Card.Text>
                                    2016
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar10} />
                            <Card.Body className='text-light'>
                                <Card.Title>Locke & Key</Card.Title>
                                <Card.Text>
                                    2020
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar11} />
                            <Card.Body className='text-light'>
                                <Card.Title>Reply 1988</Card.Title>
                                <Card.Text>
                                    2015
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "black" }} className="px-2">
                            <Card.Img variant="top" src={gambar12} />
                            <Card.Body className='text-light'>
                                <Card.Title>PanjiManusiaMillenium</Card.Title>
                                <Card.Text>
                                    1999
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </CardGroup>
            </div>
        </div>





    )
}

export default Listfilm