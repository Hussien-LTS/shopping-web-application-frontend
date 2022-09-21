import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const CustomCards = (props) => {
  const user = localStorage.getItem("token");
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.itemImg} />
        <Card.Body>
          <Card.Title>{props.itemName}</Card.Title>
          <Card.Text>{props.itemDesc}</Card.Text>
        </Card.Body>
        {user && (
          <Card.Footer>
            <Button variant="primary">Go somewhere</Button>
            <Button variant="danger" onClick={props.handelDeleteItem}>
              Delete Item
            </Button>
          </Card.Footer>
        )}
      </Card>
    </>
  );
};

export default CustomCards;
