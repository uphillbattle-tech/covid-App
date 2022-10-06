import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Navigation/Home';
import CovidCases from '../Navigation/Covid-Reslut/Covid-Cases-Deaths';
import HospitalBeds from '../USA-Hospital-Beds/USA-Hospital-Beds-result';


import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";



const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Covid Home</Navbar.Brand>
          <Nav className="me-auto">

            <NavDropdown title="Covid Result" id="basic-nav-dropdown">
                <Nav.Item as={Link} to="/covid-deaths">Covid-Cases-Deaths</Nav.Item>
                <NavDropdown.Divider />
                <Nav.Item as={Link} to="/hospital-beds">USA Hospital Beds Reslut</Nav.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/covid-deaths' element={<CovidCases/>}/>
            <Route path='/hospital-beds' element={<HospitalBeds/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default NavBar;
