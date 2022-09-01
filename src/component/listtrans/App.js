import React, { Component } from "react";
import Listtrans from "../listtrans";
import { Route, Routes } from "react-router-dom";
import List from "../list";
import Listfilm from "../listfilm";
import Addfilm from "../addfilm";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <Listtrans />

        </div> */}
        <Listtrans />
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/listfilm' element={<Listfilm />} />
          <Route path='/addfilm' element={<Addfilm />} />

        </Routes>
        {/* <div>
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
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>


            </tbody>
          </Table>
        </div> */}

      </div>

    );

  }
}

export default App;
