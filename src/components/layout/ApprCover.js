import React from 'react'
import { Container } from 'react-bootstrap';
import "./AboutCover.css";
import { Link } from "react-router-dom";


export default function ApprCover() {
    return (
        <Link exact to="/AboutUs">

        <div className=" AboutCover AboutCover4 d-flex align-items-center"  >
            
            <Container>
<p>Want to know more?</p>
            <h1>About us</h1>
            <p className="px-3 arr"><i class="fas fa-arrow-right fa-2x"></i></p>
            </Container>
        </div>
        </Link>

    )
}
