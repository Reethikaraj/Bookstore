import React from "react";
import { FaTwitterSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Carousel, Col, Container, Row } from "react-bootstrap";

import "./mainpage.css";

const Mainpage = () => {
  return (
    <div>
      <Container fluid>
        <div className="mainPage">
          <h1>Children's Bookstore</h1>
          <h4>Keep your inner child alive.</h4>

          <Carousel className="carousels">
            <Carousel.Item interval={5000} className="carousel-item">
              <Row lg={2} sm={1}>
                <Col>
                  <img
                    className="carouselImage"
                    src="/images/Walt.jpg"
                    alt="walt"
                  />
                </Col>
                <Col className="carousel-text">
                  <p>
                    There is more treasure in books than in all the pirates loot
                    on treasure island.
                  </p>
                  <em>- Walt Disney</em>
                  <br />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="carousel-item">
              <Row lg={2} sm={1}>
                <Col>
                  <img
                    className="carouselImage"
                    src="images/apj.jpg"
                    alt="APJ"
                  />
                </Col>
                <Col className="carousel-text">
                  <p>
                    Books become permanent companions. Sometimes, they are born
                    before us, guide us during our life journey and continue for
                    many generations.
                  </p>
                  <em>- Dr.A.P.J.Abdul Kalam</em>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="carousel-item">
              <Row lg={2} sm={1}>
                <Col>
                  <img
                    className="carouselImage"
                    src="images/ernest.jpg"
                    alt="Ernest"
                  />
                </Col>
                <Col className="carousel-text">
                  <p>There is no friend as loyal as a book.</p>
                  <em>- Ernest Hemingway</em>
                  <br />
                  <br />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>

        <footer>
          <span> &copy; copyrights reserved</span>
          <div>
            <FaInstagram />
            <FaLinkedin />
            <FaTwitterSquare />
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Mainpage;
