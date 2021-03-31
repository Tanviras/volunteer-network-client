import React from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from '../../logos/Group-1329.png';
import './Header.css';

const Header = () => {
  return (
      <Navbar expand="lg">

        <Navbar>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              width="200"
              height="75"
              className="d-inline-block align-top imageSize"
              alt="logo"
            />
          </Navbar.Brand>
        </Navbar>

          
          <div className="headerSizes">
          <Nav >
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link href="/donation" className="elementSizes">Donation</Nav.Link>
            <Nav.Link href="/events" className="elementSizes">Events</Nav.Link>
            <Nav.Link href="/blog" className="elementSizes">Blog</Nav.Link>
           
            <Nav.Link href="/registration" className="elementSizes">
              <Button variant="primary" >Register</Button>
            </Nav.Link>

            <Nav.Link href="/admin" className="elementSizes">
                <Button variant="dark">Admin</Button>
            </Nav.Link>
         </Nav>
          </div>
          

      </Navbar>
  );
};

export default Header;