import React from 'react'
import Form from 'react-bootstrap/Form';

function Addfilm() {
    return (
        <div style={{ backgroundColor: "black" }} >
            <div >
                <h2 className='text-light p-15 '>Add Film</h2>
            </div>
            <form className='d-flex justify-content-center'>
                <div className='row g-2 d-flex justify-content-center'>
                    <div className='col-8'>
                        <div className='form-floating'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Title" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='form-floating'>
                            <Form.Group controlId="formFile" className="mb-3 ">
                                <Form.Label></Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="year" />
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Category</option>
                            <option value="1">TV Series</option>
                            <option value="2">Movies</option>

                        </select>
                    </div>
                    <div className='col-10 d-flex justify-content-center input-group-lg '>
                        <Form.Label></Form.Label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Description' rows="3"></textarea>
                    </div>

                    <div className='row g-2 d-flex justify-content-center'>
                        <div className='col-8'>
                            <div className='form-floating'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Title Episode" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='form-floating'>
                                <Form.Group controlId="formFile" className="mb-3 ">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </div>

                        </div>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Link Film" />
                    </div>
                    <div className='col-10 d-flex justify-content-center '>

                        <Form.Control type="text" placeholder="+" />
                    </div>
                    <div className="col-10 d-flex justify-content-end">
                        <button class="btn btn-danger float-md-end btn-lg" type="button">save</button>

                    </div>

                </div>


            </form>
        </div>

    )
}

export default Addfilm