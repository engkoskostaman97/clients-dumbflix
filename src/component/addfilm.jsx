import React from 'react'
import Form from 'react-bootstrap/Form';

function Addfilm() {
    return (
        <div style={{ backgroundColor: "black" }} >
            <div >
                <h2 className='text-light'>Add Film</h2>
            </div>
            <div className="col-auto ">
                <Form.Floating className="row g-2">
                    <Form.Control
                        type="text"
                        placeholder="Title"
                    />
                    <label htmlFor=" visually-hidden" >Title</label>


                </Form.Floating>
                <br></br>
                <div>
                    <Form.Control type="text" placeholder='description' as="textarea" rows={3} />
                </div>


            </div>

        </div>
    )
}

export default Addfilm