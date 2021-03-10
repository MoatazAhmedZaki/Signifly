import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Together() {
    return (
        <div className=" mx-3 my-5 py-5 " style={{backgroundColor:"#f7f8f9",borderRadius:"20px"}}>
        <Container>
            <Row>
                <Col lg={4} md={4} sm={12}>
<h2>LET'S BUILD SOMETHING TOGETHER

</h2> 

<h5 className="py-3">If you have a digital project in mind, we would be happy to have a chat about how we can help make that happen.</h5>
<p><span>We are pretty confident we can challenge your assumptions and help shape a good process through which to develop insights, skills and an extremely satisfying outcome.</span></p>
</Col>


<Col lg={8} md={8} sm={12}>
<Row>


<Col lg={6} md={6} sm={12} className=" pb-3">
<img src={require('../../images/poss1.jpg')} className="img-fluid pb-3 "  alt="pic" />
<h4>Michael Valentin</h4>
<p>CEO, Partner & Digital Strategist</p>

<div class="d-flex justify-content-start">
<strong>Phone:</strong>
<p className="px-5 my-1">+45 2819 2966</p>


</div>

<div class="d-flex justify-content-start">
<strong>E-mail:
</strong>
<p className="px-5  my-1">mv@signifly.com</p>


</div>

    </Col>


    <Col lg={6} md={6} sm={12} className=" pb-3">
<img src={require('../../images/poss2.jpg')} className="img-fluid pb-3"  alt="pic" />
<h4>Nicklas Rønning
</h4>
<p>Managing Director, Canada
</p>

<div class="d-flex justify-content-start">
<strong>Phone:</strong>
<p className="px-5 my-1">+1 (438) 866-1336</p>


</div>

<div class="d-flex justify-content-start">
<strong>E-mail:
</strong>
<p className="px-5  my-1">nr@signifly.com</p>


</div>

    </Col>

</Row>




</Col>


</Row>
</Container>               
    </div>
    )
}
