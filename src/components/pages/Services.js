import React, { Component } from "react";
import "./Services.css";
import Navbar from "../layout/Navbar";
import { Container, Col, Row } from "react-bootstrap";
import Together from "../layout/Together";
import ServicesCover from "../layout/ServicesCover";

export default class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Services-page">
        <Navbar color={"black"} />
        <Container>
          <Row className=" align-items-center mt-5">
            <Col lg={6} md={6} sm={12}>
              <Row>
                <h1>
                  WE BUILD BRANDS &{" "}
                  <span className="title">
                    <br />
                    DIGITAL BUSINESSES
                  </span>
                </h1>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Row className="justify-content-end">
                <img
                  src={require("../../images/serr.PNG")}
                  alt="rocket"
                  className="img-fluid "
                />
              </Row>
            </Col>
          </Row>

          <Row className="my-5">
            <Col lg={2} md={6} sm={12}>
              <p>SERVICES</p>
            </Col>

            <Col lg={7} md={6} sm={12}>
              <p>
                With the combined power of strategy, creativity and technology
                we create positive impact for people and bottom lines.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className="serv-card mb-5 ">
                <div className="p-5 ">
                  <h3>Strategic Digital Innovation</h3>
                  <p>A mindset to create game-changing initiatives</p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="serv-card mb-5 ">
                <div className="p-5 ">
                  <h3>Strategic Digital Innovation</h3>
                  <p>A mindset to create game-changing initiatives</p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="serv-card mb-5 ">
                <div className="p-5 ">
                  <h3>Strategic Digital Innovation</h3>
                  <p>A mindset to create game-changing initiatives</p>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="serv-card mb-5 ">
                <div className="p-5 ">
                  <h3>Strategic Digital Innovation</h3>
                  <p>A mindset to create game-changing initiatives</p>
                </div>
              </div>
            </Col>
          </Row>

          <div className="py-5">
            <h2>OUR TOOLBOX</h2>
            <h4 className="pb-5 pt-4">
              We insist on having the right tools to get new digital innovations
              out there fast. Here is a non-exhaustive list of the tools we have
              on hand.
            </h4>

            <Row>
              <Col md={3} xs={12}>
                <h5 className="py-3">Methodologies</h5>
                <p>Design thinking</p>
                <p>Agile development</p>

                <p>Creative sprints</p>

                <p>Digital first strategy</p>

                <p>Prototyping</p>
              </Col>

              <Col md={3} xs={12}>
                <h5 className="py-3">Methodologies</h5>
                <p>Design thinking</p>
                <p>Agile development</p>

                <p>Creative sprints</p>

                <p>Digital first strategy</p>

                <p>Prototyping</p>
              </Col>

              <Col md={3} xs={12}>
                <h5 className="py-3">Methodologies</h5>
                <p>Design thinking</p>
                <p>Agile development</p>

                <p>Creative sprints</p>

                <p>Digital first strategy</p>

                <p>Prototyping</p>
              </Col>

              <Col md={3} xs={12}>
                <h5 className="py-3">Methodologies</h5>
                <p>Design thinking</p>
                <p>Agile development</p>

                <p>Creative sprints</p>

                <p>Digital first strategy</p>

                <p>Prototyping</p>
              </Col>
            </Row>
          </div>
        </Container>

        <Together />

        <ServicesCover />
      </div>
    );
  }
}
