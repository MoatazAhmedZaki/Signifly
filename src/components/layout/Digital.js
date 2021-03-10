import React, { Component } from 'react'
import "./Digital.css";
import { Container, Row, Col } from 'react-bootstrap';

export default class Digital extends Component {
    render() {
        return (
            <div className="gree mx-3 my-5 py-5 ">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
<h2>FUELLING DIGITAL<br/>
INNOVATION SINCE 2010</h2> 
</Col>


<Col lg={6} md={6} sm={12}>
<span >10 YEARS AND COUNTING
</span>
<h3 className="pt-5">We're on a mission to improve how companies use digital solutions to amplify brands and connect with people</h3>


<span >Since setting up shop in 2010 we’ve have been creating<strong> websites, apps, digital branding and online campaigns for bold, visionary companies.</strong> Our mission is to make it easier for brands to adapt technology and for their brand followers to benefit. 
    This desire to cut through the complexity and get down to providing useful digital offerings has guided our decisions since day one. </span>


<Row className="my-5">
<Col lg={4} md={4} sm={12}>
<h3 className="bignumber">#2</h3>
<div className="greenlline"></div>
<span>Fastest-growing agency in Denmark (2017)</span>
</Col>
<Col lg={4} md={4} sm={12}>
<h3 className="bignumber">4</h3>
<div className="greenlline"></div>
<span>Time Gazelle recipient for company growth

</span>
</Col>
<Col lg={4} md={4} sm={12}>
<h3 className="bignumber">10</h3>
<div className="greenlline"></div>
<span>Awards for design and development

</span>
</Col>
<Col lg={4} md={4} sm={12}>
<h3 className="bignumber">32</h3>
<div className="greenlline"></div>
<span>Ambitious team players and experts



</span>
</Col>
<Col lg={4} md={4} sm={12}>
<h3 className="bignumber">CPH</h3>
<div className="greenlline"></div>
<span>Born and raised in Copenhagen, Denmark



</span>
</Col>
<Col lg={4} md={4} sm={12}>
<h3 className="bignumber">2010</h3>
<div className="greenlline"></div>
<span>Doing our thing since 2010



</span>
</Col>



</Row>


</Col>

</Row>
</Container>               
            </div>
        )
    }
}
