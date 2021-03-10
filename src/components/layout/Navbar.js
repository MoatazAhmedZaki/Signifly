import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import { NavLink, Link } from "react-router-dom";

import "./navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    // console.log(this.props);
  }

  activateToggle = (e) => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="header2">
        {/* <Container> */}

        <Row className="navrow">
          <Col lg={6}>
            <button 
            
            
            className={"toggle pt-5 " + (this.state.open || this.props.color==="white"? 'white-lines' : 'black-lines')}
            
            onClick={this.activateToggle}  >
              <div
                className={
                  "line1 toggle-line " + (this.state.open ? "spi2 " : "str2 ")
                }
              ></div>
              {/* {this.props.color==="black"?   <div className={"line1 toggle-line-black " + (this.state.open ? 'spi2' : 'str2')}></div> 
: <div className={"line1 toggle-line " + (this.state.open ? 'spi2' : 'str2')}></div> 
} */}
              <div
                className={
                  "line2 toggle-line " + (this.state.open ? "spi" : "str")
                }
              ></div>

              <div
                className={
                  "line3 toggle-line " + (this.state.open ? "spi3" : "str3")
                }
              ></div>
            </button>
          </Col>

          <Col lg={6} className="logo pt-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="__GLYEAOv__Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 78.9 31.2"
              fill={this.state.open?"white":this.props.color}
            >
              <g>
                <path d="M9.8,8.6c0.8,0.3,1.4,0.7,1.9,1.2c0.5,0.5,0.9,1.1,1.1,1.7c0.3,0.6,0.4,1.3,0.4,1.9h-3.1 c0-0.7-0.3-1.3-0.8-1.8C8.8,11.3,8,11.1,7,11.1c-0.4,0-0.8,0-1.2,0.1c-0.4,0.1-0.7,0.2-1,0.4c-0.3,0.2-0.5,0.4-0.7,0.6 c-0.2,0.2-0.3,0.5-0.3,0.8c0,0.6,0.3,1,0.9,1.3c0.6,0.3,1.5,0.5,2.8,0.8c1,0.2,1.9,0.4,2.6,0.6c0.8,0.2,1.4,0.6,2,0.9 c0.5,0.4,1,0.9,1.3,1.4c0.3,0.6,0.4,1.3,0.4,2.1c0,0.8-0.2,1.5-0.5,2.1c-0.3,0.6-0.8,1.2-1.4,1.6c-0.6,0.4-1.3,0.8-2.1,1 C9,25.1,8.1,25.2,7,25.2c-0.8,0-1.6-0.1-2.4-0.4c-0.8-0.2-1.5-0.6-2.2-1.1c-0.6-0.5-1.2-1.1-1.5-1.8c-0.4-0.7-0.6-1.6-0.6-2.6h3.1 c0,0.5,0.1,0.9,0.3,1.3c0.2,0.4,0.5,0.7,0.9,0.9C5,21.9,5.4,22,5.8,22.2c0.4,0.1,0.8,0.2,1.3,0.2c0.4,0,0.9,0,1.3-0.1 c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.2,0.6-0.4,0.8-0.7c0.2-0.3,0.3-0.6,0.3-1c0-0.2-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.4-0.6-0.6 c-0.3-0.2-0.7-0.4-1.2-0.5c-0.5-0.2-1.1-0.3-1.9-0.4c-0.8-0.1-1.5-0.3-2.2-0.5c-0.7-0.2-1.4-0.5-1.9-0.9c-0.6-0.4-1-0.8-1.4-1.4 c-0.4-0.6-0.5-1.3-0.5-2.2c0-0.7,0.1-1.4,0.4-1.9c0.3-0.6,0.7-1.1,1.3-1.5c0.6-0.4,1.2-0.7,2-1C5.2,8.3,6.1,8.2,7,8.2 C8.1,8.2,9.1,8.3,9.8,8.6z"></path>
                <rect x="15.8" y="12.9" width="3.1" height="12.2"></rect>
                <path d="M33.1,24.4c0,1-0.1,1.9-0.4,2.7c-0.3,0.8-0.7,1.5-1.3,2.1c-0.5,0.6-1.2,1-2,1.3c-0.8,0.3-1.7,0.5-2.6,0.5 c-0.7,0-1.4-0.1-2.1-0.3c-0.7-0.2-1.3-0.5-1.8-0.9c-0.5-0.4-1-0.8-1.3-1.3c-0.4-0.5-0.6-1.1-0.7-1.7h3.4c0.1,0.2,0.2,0.4,0.4,0.6 c0.2,0.2,0.4,0.3,0.6,0.4c0.2,0.1,0.5,0.2,0.7,0.2c0.2,0,0.5,0.1,0.7,0.1c1.1,0,1.9-0.3,2.4-1c0.5-0.7,0.8-1.5,0.8-2.6v-0.6 c-0.5,0.5-1,0.8-1.6,1.1c-0.6,0.2-1.3,0.4-2,0.4c-0.8,0-1.5-0.2-2.2-0.5c-0.7-0.3-1.3-0.8-1.8-1.3c-0.5-0.6-0.9-1.2-1.3-2 c-0.3-0.8-0.5-1.6-0.5-2.5c0-0.9,0.2-1.7,0.5-2.5c0.3-0.8,0.7-1.5,1.3-2c0.5-0.6,1.1-1,1.8-1.3c0.7-0.3,1.4-0.5,2.2-0.5 c0.8,0,1.4,0.1,2.1,0.4c0.6,0.3,1.2,0.7,1.7,1.2v-1.3h3V24.4z M29.7,17.6c-0.2-0.4-0.4-0.8-0.7-1.1c-0.3-0.3-0.6-0.6-1-0.7 c-0.4-0.2-0.8-0.3-1.2-0.3c-0.4,0-0.8,0.1-1.2,0.3c-0.4,0.2-0.7,0.4-1,0.7c-0.3,0.3-0.5,0.7-0.7,1.1c-0.2,0.4-0.2,0.9-0.2,1.4 c0,0.5,0.1,0.9,0.2,1.4c0.2,0.4,0.4,0.8,0.7,1.1c0.3,0.3,0.6,0.5,1,0.7c0.4,0.2,0.8,0.3,1.2,0.3c0.4,0,0.8-0.1,1.2-0.3 c0.4-0.2,0.7-0.4,1-0.7c0.3-0.3,0.5-0.7,0.7-1.1c0.2-0.4,0.2-0.9,0.2-1.3C30,18.5,29.9,18.1,29.7,17.6z"></path>
                <path d="M46.3,25.1h-3.1v-7.1c0-0.2,0-0.4-0.1-0.7c0-0.3-0.1-0.5-0.3-0.8c-0.1-0.3-0.4-0.5-0.7-0.7 c-0.3-0.2-0.7-0.3-1.2-0.3c-0.7,0-1.3,0.2-1.7,0.7c-0.4,0.5-0.7,1-0.7,1.7v7.1h-3.1V12.9h3v1.2c0.4-0.5,0.9-0.8,1.4-1.1 c0.5-0.3,1.1-0.4,1.8-0.4c0.7,0,1.4,0.1,1.9,0.4c0.6,0.3,1.1,0.6,1.5,1.1c0.4,0.5,0.7,1,1,1.7c0.2,0.7,0.3,1.4,0.3,2.2V25.1z"></path>
                <rect x="48.5" y="12.9" width="3.1" height="12.2"></rect>
                <path d="M59.9,12.9v2.8h-2.2v9.4h-3.1v-9.4h-1.5v-2.8h1.5c0-0.8,0.1-1.5,0.4-2.2c0.2-0.7,0.6-1.2,1.1-1.7 c0.5-0.5,1-0.8,1.7-1c0.7-0.2,1.4-0.3,2.3-0.2v2.9c-0.8-0.1-1.3,0.1-1.7,0.4c-0.4,0.3-0.6,0.9-0.6,1.8H59.9z"></path>
                <path d="M64.8,25.1h-3.1V7.7h3.1V25.1z"></path>
                <path d="M73.2,27.3c-0.3,0.8-0.6,1.4-1,1.9c-0.4,0.5-0.8,0.8-1.3,1.1c-0.5,0.2-1,0.4-1.5,0.4 c-0.6,0.1-1.2,0.1-1.8,0v-2.8c0.4,0,0.7,0,1,0c0.3,0,0.5-0.1,0.8-0.3c0.2-0.1,0.4-0.3,0.6-0.5c0.2-0.2,0.3-0.5,0.4-0.9l0.4-0.9 l-4.7-12.4h3.3l3,8.8l2.9-8.8h3.3L73.2,27.3z"></path>
                <circle cx="50.1" cy="2.2" r="1.8"></circle>
              </g>
            </svg>
          </Col>
        </Row>

        <div className={"sidenav " + (this.state.open ? "openn" : "closee")}>
          <div className="main">
            <NavLink exact to="/AboutUs" className="item">
              About Us
            </NavLink>
            <NavLink exact to="/Work" className="item">
              Work
            </NavLink>

            <NavLink exact to="/Services" className="item">
              Services
            </NavLink>

            <NavLink exact to="/Approach" className="item">
              Approach
            </NavLink>
          </div>

          <div className="row undernav">
            <div className=" item">
              <Link exact to="/">
                Team
              </Link>
            </div>
            <div className=" item">
              <Link exact to="/" className=" line">
                Not Work
              </Link>
            </div>

            <div className=" item">
              <Link exact to="/">
                Career
              </Link>
            </div>

            <div className=" item">
              <Link exact to="/">
                Iternship
              </Link>
            </div>

            <div className=" item">
              <Link exact to="/">
                News
              </Link>
            </div>
            <div className=" item">
              <Link exact to="/">
                Canada
              </Link>
            </div>

            <div className=" item">
              <Link exact to="/">
                Contact
              </Link>
            </div>
            <div className=" item">
              <Link exact to="/">
                More Signfly
              </Link>
            </div>
          </div>
        </div>

        {/* </Container> */}
      </div>
    );
  }
}
