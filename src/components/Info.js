import React from "react";
import MyImage from "../driski.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Info(){
    return (
        <div>
            <img src={MyImage} className="img"/>
            <div className="info">
                <h4 className="name">D'Riski Maulana</h4>
                <p className="job">Software Engineer</p>
                <a href="driskimaulana.c120.me">driskimaulana.c120.me</a>
            </div>

            <div className="content">
                <a href="mailto:driskimaulana@upi.edu?subject=Hy Riski!&body=Message!"><button className="email-button"><FontAwesomeIcon icon={faEnvelope} className="icon" /> Email</button></a>
                <a href="https://www.linkedin.com/in/driskimaulana/"><button className="linkedin-button"><FontAwesomeIcon icon={faLinkedin} className="icon"/> LinkedIn</button></a>
            </div>
            
        </div>
    );
}