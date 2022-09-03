import React from 'react'
import Table from 'react-bootstrap/Table';


import Card from 'react-bootstrap/Card';
import { BsFillCaretDownFill } from 'react-icons/bs';
const styles = {
    cardd: {
        backgroundColor: "black",
        margin: "20px",
    }
}
function List() {
    return (
        <div>
            <Card style={styles.cardd}>
                <Card.Body className="text-light m-3">
                    <Card.Title className="mb-4">Incoming Transaction</Card.Title>
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr className="text-danger">
                                <th>No</th>
                                <th>Users</th>
                                <th>Bukti Transfer</th>
                                <th>Remaining Active</th>
                                <th>Status User</th>
                                <th>Status Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>akus</td>
                                <td>bca.jpg</td>
                                <td>26/Hari</td>
                                <td className="text-success">Active</td>
                                <td className="text-success">Approve</td>
                                <td><BsFillCaretDownFill color="blue" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>abdullah </td>
                                <td>bni.jpg</td>
                                <td>26/Hari</td>
                                <td className="text-success">Active</td>
                                <td className="text-success">Approve</td>
                                <td><BsFillCaretDownFill color="blue" /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>muhammad setiaji</td>
                                <td>permata.jpg</td>
                                <td>0/Hari</td>
                                <td className="text-danger">Not active</td>
                                <td className="text-danger">Cancel</td>
                                <td><BsFillCaretDownFill color="blue" /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Ade Teguh</td>
                                <td>permata.jpg</td>
                                <td>0/Hari</td>
                                <td className="text-danger">Not active</td>
                                <td className="text-warning">Pending</td>
                                <td><BsFillCaretDownFill color="blue" /></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Aji </td>
                                <td>bi.jpg</td>
                                <td>0/Hari</td>
                                <td className="text-danger">Not active</td>
                                <td className="text-warning">Pending</td>
                                <td><BsFillCaretDownFill color="blue" /></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Sugeng No Pants</td>
                                <td>bni.jpg</td>
                                <td>0/Hari</td>
                                <td className="text-danger">Not active</td>
                                <td className="text-warning">Pending</td>
                                <td><BsFillCaretDownFill color="blue" /></td>
                            </tr>
                        </tbody>
                    </Table>

                </Card.Body>
            </Card>
        </div>
    );
}

export default List