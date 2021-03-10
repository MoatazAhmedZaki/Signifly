import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function StartToNow() {
    return (
        <div className=" mx-3 my-5 py-5 " style={{backgroundColor:"#e0e3e5",borderRadius:"20px"}}>
        <Container>
            <Row>
                <Col lg={4} md={4} sm={12}>
<h2>FROM START-UPS <br/>
TO GLOBAL BRANDS
</h2> 
</Col>


<Col lg={8} md={8} sm={12}>
<span >As an innovation partner, we should never get stuck in one industry or type of problem. That’s why we work with a wide range of brands – public and private, b2b and b2c and across a multitude of industries. The teams we work with are industry experts, and we contribute inspiration and new ways of turning industry insights into action.
</span>

</Col>

<Container>
<Row className="my-5 text-center">
<Col lg={3} md={3} sm={12} className=" mb-5">
<img src={require('../../images/1.svg')} className="img-fluid "  alt="pic"  />
</Col>

<Col lg={3} md={3} sm={12}  className=" mb-5">
<img src={require('../../images/2.svg')} className="img-fluid "  alt="pic" />
</Col>

<Col lg={3} md={3} sm={12}  className=" mb-5">
<img src={require('../../images/3.svg')} className="img-fluid "  alt="pic" />
</Col>

<Col lg={3} md={3} sm={12}  className=" mb-5">
<img src={require('../../images/4.svg')} className="img-fluid "  alt="pic" />
</Col>

<Col lg={3} md={3} sm={12}  className=" mb-5">
<img src={require('../../images/5.svg')}  className="img-fluid "  alt="pic"/>
</Col>
<Col lg={3} md={3} sm={12}  className=" mb-5">
<img src={require('../../images/6.svg')}  className="img-fluid "  alt="pic"/>
</Col>

<Col lg={3} md={3} sm={12}  className=" mb-5">
<img src={require('../../images/7.svg')}  className="img-fluid "  alt="pic"/>
</Col>

<Col lg={3} md={3} sm={12}  className=" mb-5">
<img src={require('../../images/8.svg')}  className="img-fluid "  alt="pic"/>
</Col>



</Row>

</Container>

</Row>
</Container>               
    </div>
    )
}
