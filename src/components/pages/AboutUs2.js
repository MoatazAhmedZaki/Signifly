import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import { Container, Col, Row } from "react-bootstrap";
import "./AboutUs2.css";
import Car from "../layout/Car";
import Digital from "../layout/Digital";
import Key from "../layout/Key";
import Clients from "../layout/Clients ";
import StartToNow from "../layout/StartToNow";
import OurVal from "../layout/OurVal";
import Together from "../layout/Together";
import AboutCover from "../layout/AboutCover";

export default class AboutUs2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="AboutUs-page">
        <Navbar color={"black"} />
        <Container>
          <Row className=" align-items-center mt-5">
            <Col lg={6} md={6} sm={12}>
              <Row>
                <h1>
                  DIGITAL INNOVATION
                  <span className="title">
                    <br />
                    SPECIALISTS
                  </span>
                </h1>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Row className="justify-content-end">
                <img
                  src={require("../../images/rocket.PNG")}
                  alt="rocket"
                  className="img-fluid "
                />
              </Row>
            </Col>
          </Row>

          <Row className="my-5">
            <Col lg={2} md={6} sm={12}>
              <p>ABOUT US</p>
            </Col>

            <Col lg={7} md={6} sm={12}>
              <p>
                We’re a digital agency specializing in digital innovation. Our
                team of consultants, designers and developers builds and
                launches digital products and experiences for ambitious clients
              </p>
            </Col>
          </Row>
        </Container>

        <Car />

        <Container className="my-5">
          <h2 className="my-5 pt-5">The basics</h2>

          <Row>
            <Col lg={4} md={4} sm={12}>
              <img
                src="https://www.datocms-assets.com/7718/1545058582-what.svg"
                alt="our basics"
              />
              <h6 className="my-3">What we do</h6>
              <p>
                Signifly creates brands, builds products and launches campaigns
              </p>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <img
                src="https://www.datocms-assets.com/7718/1545058787-how.svg"
                alt="our basics"
              />
              <h6 className="my-3">How we do it</h6>
              <p>Our tools are innovation, design and technology.</p>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <img
                src="https://www.datocms-assets.com/7718/1545058780-why.svg"
                alt="our basics"
              />
              <h6 className="my-3">What makes us different</h6>
              <p>
                We believe in close collaboration and a multidisciplinary
                culture.
              </p>
            </Col>
          </Row>
        </Container>

        <Digital />

        <Key />
        <div>
          <img
            src="https://www.datocms-assets.com/7718/1578908485-signifly-team.jpg?auto=compress&w=1519&dpr=1.25&q=70"
            className=" img-fluid"
            alt="pic"
          />
        </div>

        <Clients />

        <StartToNow />

        <OurVal />

        <Together />

        <AboutCover />
      </div>
    );
  }
}
