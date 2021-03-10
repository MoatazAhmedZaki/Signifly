import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import "./Key.css";

export default class Key extends Component {
    constructor(){
        super();
        this.state = {
            isHovered: false,
            isHovered2: false

        };
        // this.handleHover = this.handleHover.bind(this);
    }
    handleHover=()=>{
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    handleHover2=()=>{
        this.setState(prevState => ({
            isHovered2: !prevState.isHovered2
        }));
    }
    handleHover3=()=>{
        this.setState(prevState => ({
            isHovered3: !prevState.isHovered3
        }));
    }

    render() {
        const hover1 = this.state.isHovered ? " show1 " : "";
        const hover2 = this.state.isHovered2 ? " show2 " : "";
        const hover3 = this.state.isHovered3 ? " show3 " : "";



        return (
            <Container>
                <Row >
<Col lg={4} md={6} sm={12}>
<p className="pt-5 pb-2 keytitle">THE TEAM IS KEY</p>
<p className="pp">We build teams to match businesses. We understand that ideas come from everywhere and expect everyone to bring their own perspectives to the table.</p>
<p className="pp">Our culture is built on collaboration, and we believe diverse teams help foster innovation and build better products.</p>

</Col>

<Col lg={8} md={6} sm={12} className="fixedH my-5">

    <div  className={hover1 + "mycircle "} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}> <p className="circle-title">Technology </p></div>
    <div  className={hover2 + "mycircle mycircle2"} onMouseEnter={this.handleHover2} onMouseLeave={this.handleHover2}> <p className="circle-title">Creativity </p></div>

    <div  className={hover3 + "mycircle mycircle3"} onMouseEnter={this.handleHover3} onMouseLeave={this.handleHover3}> <p className="circle-title">Strategy </p></div>

</Col>





                </Row>
            </Container>
        )
    }
}
