import React from "react";
import { useParams } from "react-router-dom";
import Listfilm from "./listfilm";
import NavbarAdmin from "./NavbarAdmin";

function Listfilms() {
  const params = useParams();
  return (
    <div>
      <NavbarAdmin />
      <Listfilm category={params.category} />
    </div>
  );
}

export default Listfilms;
