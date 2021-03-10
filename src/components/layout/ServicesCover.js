import React from 'react'
import "./AboutCover.css";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function ServicesCover() {
    return (
        <Link exact to="/Approach">

        <div className=" AboutCover AboutCover1 AboutCover3 d-flex align-items-center"  >
            
        <Container>
<p>What makes us different?</p>
        <h1>Approach</h1>
        <p className="px-3 arr"><i class="fas fa-arrow-right fa-2x"></i></p>
        </Container>
    </div>
    </Link>
    )
}
