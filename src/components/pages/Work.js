import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import { Container, Col, Row } from "react-bootstrap";
import "./Work.css";
import WorkCover from "../layout/WorkCover";

export default class Work extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Work-page">
        <Navbar color={"black"} />
        <Container>
          <Row className=" align-items-center mt-5">
            <Col lg={6} md={6} sm={12}>
              <Row>
                <h1>
                  CREATING WHAT'S NEXT
                  <span className="title">
                    <br />
                    WITH DESIGN & TECHNOLOGY
                  </span>
                </h1>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Row className="justify-content-end">
                <img
                  src={require("../../images/robott.PNG")}
                  alt="robot"
                  className="img-fluid "
                />
              </Row>
            </Col>
          </Row>

          <Row className="my-5">
            <Col lg={2} md={6} sm={12}>
              <p>FILTER</p>
            </Col>

            <Col lg={7} md={6} sm={12}>
              <p>- ALL Work</p>
              <p>- Digital Experience</p>
              <p>- Branding</p>
              <p>- E-commerce</p>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <p>
                We combine creativity and technology to deliver work that is fit
                for the future and deeply rooted in strategy.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={4} xs={12}>
              <div className="product-card">
                <div className="product-img "></div>

                <div className="title-hover">
                  <p className=" product-cat my-3">E-commerce</p>

                  <p className=" product-name">
                    Maersk - Changing global container sales
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="product-card">
                <div className="product-img "></div>

                <div className="title-hover">
                  <p className=" product-cat my-3">E-commerce</p>

                  <p className=" product-name">
                    Maersk - Changing global container sales
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="product-card">
                <div className="product-img "></div>

                <div className="title-hover">
                  <p className=" product-cat my-3">E-commerce</p>

                  <p className=" product-name">
                    Maersk - Changing global container sales
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="product-card">
                <div className="product-img "></div>

                <div className="title-hover">
                  <p className=" product-cat my-3">E-commerce</p>

                  <p className=" product-name">
                    Maersk - Changing global container sales
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="product-card">
                <div className="product-img "></div>

                <div className="title-hover">
                  <p className=" product-cat my-3">E-commerce</p>

                  <p className=" product-name">
                    Maersk - Changing global container sales
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="product-card">
                <div className="product-img "></div>

                <div className="title-hover">
                  <p className=" product-cat my-3">E-commerce</p>

                  <p className=" product-name">
                    Maersk - Changing global container sales
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <WorkCover />
      </div>
    );
  }
}
