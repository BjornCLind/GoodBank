import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../Context/AuthContext.js";

function Navi() {

  const [underline, setUnderline] = useState("");
  const {currentUser} = useAuth();



  return(
    <>
    <Navbar className="nav-color" variant="dark">
    <Container>
    <Navbar.Brand>Last Hawaiian Bank</Navbar.Brand>
      <Nav>
        <Nav.Link className={(underline === "homepage") ? 'underline' : ''} as={Link} to="/"
          data-toggle="tooltip" data-placement="bottom" title="Home Page"
          onClick={() => setUnderline("homepage")}>Home</Nav.Link>

        <Nav.Link className={(underline === "deposit") ? 'underline' : ''} as={Link} to="/deposit"
          data-toggle="tooltip" data-placement="bottom" title="Deposit Funds"
          onClick={() => setUnderline("deposit")}>Deposit</Nav.Link>

        <Nav.Link className={(underline === "withdraw") ? 'underline' : ''} as={Link} to="/withdraw"
          data-toggle="tooltip" data-placement="bottom" title="Withdraw Funds"
          onClick={() => setUnderline("withdraw")}>Withdraw</Nav.Link>

        <Nav.Link className={(underline === "alldata") ? 'underline' : ''} as={Link} to="/update-profile
        "
          data-toggle="tooltip" data-placement="bottom" title="Collected Data"
          onClick={() => setUnderline("alldata")}>Profile</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    {currentUser &&
      <div className="d-flex align-items-center justify-content-end">
      <h3>{currentUser.email}</h3>
    </div>
    }
    </>
  );
};

export default Navi;