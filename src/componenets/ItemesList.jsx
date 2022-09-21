import React, { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CustomCards from "./CustomCards";
import { Row, Col,Button } from "react-bootstrap";
import axios from "axios";
import AddItem from "./AddItem";
//FIXME: url params ???
const ItemesList = (props) => {
  const [items, setItems] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const ref = useRef();
  const fromUrl = useCallback(async () => {
    const url = "http://localhost:3001/v1/items";
    const res = await axios.get(url);
    console.log("fromUrl", res.data);

    return setItems(res.data);
  }, []);
  //FIXME: complete Delete without reload
  const handelDeleteItem = async () => {
    try {
      let _id = ref.current.value;
      const url = `http://localhost:3001/v1/items/${_id}`;
      // console.log(data);
      // eslint-disable-next-line
      const { data: res } = await axios.delete(url);
      fromUrl();
      // navigate("/items");
      window.location.reload()
    } catch (error) {
      console.log(error);
      // setError(error.response.data.message);
    }
  };

  useEffect(() => {
    fromUrl();
  }, [fromUrl]);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => {
          return (
            <div key={item._id}>
              <input hidden value={item._id} ref={ref} />
              <Col>
                <CustomCards
                  itemImg={item.itemImg}
                  itemDesc={item.itemDesc}
                  itemName={item.itemName}
                  handelDeleteItem={handelDeleteItem}
                />
              </Col>
            </div>
          );
        })}
      </Row>
      <>
   
      <AddItem
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    </>
  );
};

export default ItemesList;
