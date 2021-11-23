import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import GuestGreeting from "./guestGreeting";
import UserGreeting from "./userGreeting";
import SearchBar from "./searchBar";
const NavigationBar = ({ userIsLogin, userLogout }) => {
  const guestGreeting = <GuestGreeting />;
  const userGreeting = <UserGreeting onLogout={userLogout} />;

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Poll Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/polls/new-poll">Create poll</Nav.Link>
            <SearchBar />
          </Nav>
          {userIsLogin ? userGreeting : guestGreeting}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
