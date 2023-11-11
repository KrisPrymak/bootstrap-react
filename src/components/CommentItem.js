import React from 'react';
import { Card } from 'react-bootstrap';

const CommentItem = () => {
    return (
        <Card style={{ width: "80%" }} className='mb-3'>
      <Card.Body>
        <Card.Title>Email</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    );
};

export default CommentItem;