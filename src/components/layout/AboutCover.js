import React from 'react'
import { Container } from 'react-bootstrap';
import "./AboutCover.css";
import { Link } from "react-router-dom";


export default function AboutCover() {
    return (
    
        <Link exact to="/Work">
        <div className=" AboutCover AboutCover1 d-flex align-items-center"  >
            
            <Container>
<p>See our thinking in action</p>
            <h1>Work</h1>
            <p className="px-3 arr"><i class="fas fa-arrow-right fa-2x"></i></p>
            </Container>
        </div>
        </Link>
    )
}
