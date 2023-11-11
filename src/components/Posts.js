import React from "react";
import { Button, Container } from "react-bootstrap";
import CardItem from "./CardItem";
import './../index.css';

const Posts = () => {
  return (
      <Container className="card-columns">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Container>
  );
};

export default Posts;
