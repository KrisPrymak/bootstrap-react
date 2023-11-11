import React from "react";
import { Image, Nav, NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Comments from "./Comments";

const CardItem = () => {
  return (
    <Card style={{ width: "100%" }} className="m-2">
      <Card.Body>
        <Nav>
          <NavLink href="/userPage">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              width={32}
              rounded
              className="me-2"
            />
          </NavLink>
        </Nav>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Comments />
      </Card.Body>
    </Card>
  );
};

export default CardItem;
