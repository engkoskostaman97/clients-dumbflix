import React from 'react'
import Table from 'react-bootstrap/Table';

function List() {
    return (
        <div>
            <h4>Incoming Transaction</h4>
            <Table striped>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Users</th>
                        <th>Bukti Transfer</th>
                        <th>Remaining Active</th>
                        <th>Status Users</th>
                        <th>Status Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Radif Ganteng</td>
                        <td>bca.jpg</td>
                        <td>26/Hari</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Haris Rahman</td>
                        <td>bni.jpg</td>
                        <td>26/Hari</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Amin Subagiyo</td>
                        <td>permata.jpg</td>
                        <td>0/Hari</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Haris Astina</td>
                        <td>permata.jpg</td>
                        <td>0/Hari</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Aziz Oni On</td>
                        <td>bi.jpg</td>
                        <td>0/Hari</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Sugeng No Pant</td>
                        <td>bni.jpg</td>
                        <td>0/Hari</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>


                </tbody>
            </Table>
        </div>
    )
}

export default List