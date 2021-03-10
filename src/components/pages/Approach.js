import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import "./Approach.css";

import { Container, Col, Row } from "react-bootstrap";
import Car2 from "../layout/Car2";
import ApprCover from "../layout/ApprCover";
export default class Approach extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Approach-page">
        <Navbar color={"black"} />
        <Container>
          <Row className=" align-items-center mt-5">
            <Col lg={6} md={6} sm={12}>
              <Row>
                <h1>
                  OUR SECRET SAUCE
                  <span className="title">
                    <br />
                    IS NOT A SECRET{" "}
                  </span>
                </h1>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Row className="justify-content-end">
                <img
                  src={require("../../images/alii.PNG")}
                  alt="pic"
                  className="img-fluid "
                />
              </Row>
            </Col>
          </Row>

          <Row className="my-5">
            <Col lg={2} md={6} sm={12}>
              <p>APPROACH</p>
            </Col>

            <Col lg={7} md={6} sm={12}>
              <p>
                Our approach is based on leading innovation and entrepreneurship
                experts and refined by our experience with innovation processes
                and digital projects. We have established a mindset and
                framework for driving innovation, building digital capabilities
                and creating new, sustainable business models.
              </p>
            </Col>
          </Row>
        </Container>

        <Car2 />

        <Container className="py-5">
          <Row>
            <Col lg={6} xs={12}>
              <h3>
                <strong>
                  GENERATING BUSINESS VALUE THROUGH DIGITAL INNOVATION{" "}
                </strong>
              </h3>
            </Col>

            <Col lg={6} xs={12}>
              <p>
                The digital landscape is changing rapidly, moving at a high
                speed, and our approach is all about bringing talented people
                together to execute fast. Usually this intense approach enables
                us to blaze our way from idea to product in just 100 days.
              </p>
            </Col>
          </Row>

          <Row className=" py-5">
            <Col lg={3} xs={12}>
              <img
                src="https://www.datocms-assets.com/7718/1546857649-model-understand.svg"
                alt="pic"
              />
              <div className="py-3">
                <p>
                  <strong> Understand the business</strong>
                </p>
                <p>
                  We delve deep into the business and work closely with you to
                  truly understand your market, brand and business.
                </p>
              </div>
              <p className="col-subtitle">
                <span>TOOLS & METHODS</span>
              </p>

              <p className="col-subpar">
                <span>
                  Research, business analytics, interviews, competitor
                  landscape, market trends
                </span>
              </p>
            </Col>

            <Col lg={3} xs={12}>
              <img
                src="https://www.datocms-assets.com/7718/1546857664-model-identify.svg"
                alt="pic"
              />
              <div className="py-3">
                <p>
                  <strong> Identify potential</strong>
                </p>
                <p>
                  Digital innovation processes require a clear focus. We help
                  identify the areas that offer the greatest opportunity for
                  impact.
                </p>
              </div>
              <p className="col-subtitle">
                <span>TOOLS & METHODS</span>
              </p>

              <p className="col-subpar">
                <span>Workshops, innovation processes, prototyping</span>
              </p>
            </Col>

            <Col lg={3} xs={12}>
              <img
                src="https://www.datocms-assets.com/7718/1546857671-model-build.svg"
                alt="pic"
              />
              <div className="py-3">
                <p>
                  <strong> Experiment & build</strong>
                </p>
                <p>
                  Through prototypes and experiments we build the product and
                  market test it to get early insights from real users.
                </p>
              </div>
              <p className="col-subtitle">
                <span>TOOLS & METHODS</span>
              </p>

              <p className="col-subpar">
                <span>Workshops, innovation processes, prototyping</span>
              </p>
            </Col>

            <Col lg={3} xs={12}>
              <img
                src="https://www.datocms-assets.com/7718/1546857680-model-scale.svg"
                alt="pic"
              />
              <div className=" py-3">
                <p>
                  <strong> Scale business</strong>
                </p>
                <p>
                  With a proven business case we ready the product for the big
                  stage, building an early audience with strong launch campaigns
                  and engaging content.
                </p>
              </div>
              <p className="col-subtitle">
                <span>TOOLS & METHODS</span>
              </p>

              <p className="col-subpar">
                <span>
                  Business case, digital marketing, content creation, launch
                  strategies
                </span>
              </p>
            </Col>
          </Row>
        </Container>

        <div className="pink-bg mx-4 py-5 my-5">
          <Container>
            <h2 className="pink-title py-5">
              DIGITAL INNOVATION <br />
              MADE TANGIBLE
            </h2>

            <p className="pink-bg-par py-5">
              We bridge the gap between thinking innovation and doing
              innovation. A digital consultancy that actually knows how to build
              products.
            </p>

            <Row>
              <Col lg={6} xs={12}>
                <img
                  src="https://www.datocms-assets.com/7718/1545053031-icon-innovation-lab.svg"
                  alt="pic"
                />

                <p className="pt-3">
                  <strong>Innovation Lab</strong>
                </p>
                <p>
                  <span>
                    Part of our agency focuses on helping business thrive in the
                    realm of digital innovation. We foster innovative processes
                    and instil innovative capabilities in the organizations we
                    work with. We come up with new ideas for disruptive business
                    models, digital products or maybe a digital campaign in
                    close collaboration with our clients.
                  </span>
                </p>

                <h4 className="pink-dash">____</h4>

                <p>
                  <strong>
                    Helps companies with digital transformation and
                    <br />
                    develops new digital businessmodels
                  </strong>
                </p>
              </Col>

              <Col lg={6} xs={12}>
                <img
                  src="https://www.datocms-assets.com/7718/1545053036-icon-digital-product-studio.svg"
                  alt="pic"
                />

                <p className="pt-3">
                  <strong>Digital Product Studio</strong>
                </p>
                <p>
                  <span>
                    The other part of Signifly is made up of designers and
                    developers who work closely with clients to create
                    world-class digital products and experiences. The ability to
                    rapidly produce and test digital products allows us not only
                    to speak innovation, but more importantly, to DO innovation.{" "}
                  </span>
                </p>

                <h4 className="pink-dash">____</h4>

                <p>
                  <strong>
                    Builds and launches award-winning digital
                    <br />
                    products and services
                  </strong>
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <ApprCover />
      </div>
    );
  }
}
