import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Dropdown, Row } from "react-bootstrap";
import { searchKeyword, sortByPage } from "../../redux/actions/action-getdata";
import { sortByName } from "../../redux/actions/action-getdata";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./searchBar.css";
import { rootState } from "../../redux/reducers/rootReducer";

const SearchBar = () => {
  const { keyword } = useSelector((state: rootState) => state.DataReducer);
  const { name } = useSelector((state: rootState) => state.DataReducer);
  const { page } = useSelector((state: rootState) => state.DataReducer);
  const { cart } = useSelector((state: rootState) => state.cartReducer);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchKeyword(e.target.value));
  };
  return (
    <div>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="search..."
            value={keyword}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => dispatch(sortByName(name))}>
                Name
              </Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(sortByPage(page))}>
                Pages
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Link to={"/cartdetails"} className="cartItems">
            Cart
            <FaShoppingCart /> {cart.length}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
