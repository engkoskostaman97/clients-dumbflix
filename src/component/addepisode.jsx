import React from 'react'
import Form from 'react-bootstrap/Form';

function Addepisode() {
    return (
        <div style={{ backgroundColor: "black" }} >
            <div >
                <h2 className='text-light col-4 mx-2 d-flex justify-content-end'>Add Episode</h2>
            </div>
            <form className='d-flex justify-content-center '>
                <div className='row g-2 d-flex justify-content-center'>
                    <div className='col-8'>
                        <div className='form-floating'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Title" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='form-floating'>
                            <Form.Group controlId="formFile" className="mb-3 ">
                                <Form.Label></Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="year" />
                    </div>
                    <div className="col-12 justify-content-end ">
                        <button class="btn btn-danger  d-grid gap-2 col-4 mx-auto " type="button">Add</button>

                    </div>
                </div>
            </form>

        </div>


    )
}

export default Addepisode