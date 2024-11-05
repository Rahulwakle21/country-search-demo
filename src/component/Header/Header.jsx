import React from "react";
import {Navbar,Container} from 'react-bootstrap'

const Header = () => {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Country</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             DarkMode
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
