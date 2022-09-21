import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import Input from "../CustomInput";
import axios from "axios";
function AddItem(props) {
  const [data, setData] = useState({
    itemImg: "",
    itemDesc: "",
    itemName: "",
  });
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleItemNameChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleItemDescChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleItemImgChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/v1/items";
      console.log(data);
      // eslint-disable-next-line
      const { data: res } = await axios.post(url, data);
      //TODO: clear form
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
   
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}
            <Input
              controlId="formBasicItemName"
              type="text"
              placeholder="itemName"
              name="itemName"
              onChange={handleItemNameChange}
              value={data.itemName}
            />

            <Input
              controlId="formBasicItemDesc"
              type="text"
              placeholder="itemDesc"
              name="itemDesc"
              onChange={handleItemDescChange}
              value={data.itemDesc}
            />

            <Input
              controlId="formBasicItemImg"
              type="text"
              placeholder="itemImg"
              name="itemImg"
              onChange={handleItemImgChange}
              value={data.itemImg}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Understood
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddItem;
