import React from 'react'
import { Container } from 'react-bootstrap';
import "./AboutCover.css";
import { Link } from "react-router-dom";


export default function WorkCover() {
    return (
        <Link exact to="/Services">

        <div className=" AboutCover AboutCover2 d-flex align-items-center mt-5"  >
            
            <Container>
<p>How can we help you?</p>
            <h1>See our services</h1>
            <p className="px-3 arr"><i class="fas fa-arrow-right fa-2x"></i></p>
            </Container>
        </div>
        </Link>
    )
}
