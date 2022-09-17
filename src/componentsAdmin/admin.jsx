import React from "react";
import List from "./listTransaction";
import NavbarAdmin from "./NavbarAdmin";

function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <List />
    </div>
  );
}

export default Admin;
