import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, CardBody, CardTitle } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/action-getdata";
import SearchBar from "../searchBar/SearchBar";
import "./booksTable.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/action-cart";
import { rootState } from "../../redux/reducers/rootReducer";

const BooksTable = () => {
  const finalBooks = useSelector((state: rootState) =>
    state.DataReducer.keyword
      ? state.DataReducer.filteredBooks
      : state.DataReducer.books
  );
  const dispatch = useDispatch();
  const { cart } = useSelector((state: rootState) => state.cartReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="store">
      <h1>Books search Application</h1>
      <SearchBar />
      <Container fluid>
        <Row xs={1} md={3} lg={5}>
          {finalBooks.map((book) => (
            <Col>
              <CardBody className="card">
                <Link className="link" to={`/details/${book.volumeInfo.title}`}>
                  <CardTitle><strong>{book.volumeInfo.title}</strong></CardTitle>
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="hi"
                    height="150px"
                    width="120px"
                  />
                  <p>Pages: {book.volumeInfo.pageCount? book.volumeInfo.pageCount : "NA"}</p>
                </Link>
                <Button
                  onClick={() => dispatch(addToCart(book))}
                  disabled={cart
                    .map((book) => book.volumeInfo.title)
                    .includes(book.volumeInfo.title)}
                >
                  Add to Cart
                </Button>
              </CardBody>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BooksTable;
