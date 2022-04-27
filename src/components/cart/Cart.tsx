import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { removeFromCart, ClearCart } from "../../redux/actions/action-cart";
import { rootState } from "../../redux/reducers/rootReducer";
import "./cart.css";

const Cart = () => {
  let navigate = useNavigate();
  const { cart } = useSelector((state: rootState) => state.cartReducer);
  const dispatch = useDispatch();
  return (
    <div className="cart-details">
      <h1>Cart details</h1>
      {cart.length ? (
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Book</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {" "}
                  <img
                    src={item.volumeInfo.imageLinks.thumbnail}
                    alt=""
                    height="30px"
                    width="40px"
                  />{" "}
                  {item.volumeInfo.title}
                </td>
                <td>
                  <Button
                    onClick={() => dispatch(removeFromCart(item))}
                    variant="outline-success"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <br />
          <Button
            onClick={() => dispatch(ClearCart())}
            variant="outline-success"
          >
            Clear Cart
          </Button>
        </Table>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
      <Button onClick={() => navigate("/store")}>Back</Button>
    </div>
  );
};

export default Cart;
