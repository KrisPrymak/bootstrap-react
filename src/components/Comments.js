import React from "react";
import { Accordion } from "react-bootstrap";
import CommentItem from "./CommentItem";

const Comments = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Комментарии</Accordion.Header>
        <Accordion.Body className="cards-columns">
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Comments;
