import React from "react";

import { Form } from "react-bootstrap";

import styles from "./styles.module.css";
const Input = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Control
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required
      />
    </Form.Group>
  );
};

export default Input;
