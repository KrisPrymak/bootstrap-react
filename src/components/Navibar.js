import React from "react";
import { Container, Nav, Button, Navbar, Image } from "react-bootstrap";
import myAva from '../media/user.png';

const Navibar = () => {
  const currentPathName = window.location.pathname;
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand={false}
        bg="dark"
        variant="dark"
        className="mb-4"
      >
        <Container>
          {currentPathName === "/aboutMe" || currentPathName === "/" ? (
            <div>
              {/* кнопка открывания */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              {/* то что разворачивается */}
              <Navbar.Collapse id="responsive-navbar-nav" className="mt-4">
              <Image src={myAva}  width={32} rounded className="me-2"/>
                <Navbar.Brand>
                  Кристина Приймак (kris.priimak.frontend@gmail.com)
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Список постов</Nav.Link>
                  <Nav.Link href="/aboutMe">Обо мне</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          ) : (
            <Nav>
              <Button variant="primary" href="/">Назад</Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navibar;
