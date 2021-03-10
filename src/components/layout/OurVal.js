import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'

export default function OurVal() {
    return (
        <Container className="py-5">
            <Row>
<Col lg={6} md={6} xs={12}>


<h2>OUR VALUES
</h2>

</Col>
<Col lg={6} md={6} xs={12}>
<Row>
<Col lg={6} md={6} xs={12}>
<div >
  <div class="card-body pt-0">
  <img src={require("../../images/honestly.svg")} style={{ height:"80px"}}  alt="pic"/>
    <h5 class="card-title">Honesty
</h5>
    <p class="card-text">Second agendas kill creativity. So openness, fairness and respect are qualities of the people we like to work with. We do our best to be transparent and honest and expect people around us to hold the same standards.</p>

  </div>
</div>
</Col>
<Col lg={6} md={6} xs={12}>
<div >
  <div class="card-body pt-0">
  <img src={require("../../images/energy.svg")} style={{ height:"80px"}}  alt="pic"/>
    <h5 class="card-title">Energy
</h5>
    <p class="card-text">A positive attitude fuels creative processes, and good vibes tend to multiply when everyone brings their A-game. No one is perfect, but we do our best to keep the energy high and the vibe positive for ourselves and the teams we work with.</p>

  </div>
</div>
</Col>



<Col lg={6} md={6} xs={12}>
<div >
  <div class="card-body pt-0">
  <img src={require("../../images/fun.svg")} style={{ height:"80px"}}  alt="pic"/>
    <h5 class="card-title">Fun
</h5>
    <p class="card-text">We love what we do and believe we do our best work when we have fun doing it. It’s not that we need to crack jokes or horse around – we just have to structure our efforts so what we’re doing feels more like play than work.</p>

  </div>
</div>
</Col>

</Row>
</Col>


            </Row>
            
        </Container>
    )
}
