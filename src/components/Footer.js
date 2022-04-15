import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    return (
        <footer className="footer">
            <a href="https://twitter.com/monologhujan_"><FontAwesomeIcon icon={faTwitter} className="footer--icon"/></a>
            <a href="facebook.com/drMaulana11"><FontAwesomeIcon icon={faFacebook} className="footer--icon"/></a>
            <a href="instagram.com/driskimaulana"><FontAwesomeIcon icon={faInstagram} className="footer--icon"/></a>
            <a href="github.com/driskimaulana"><FontAwesomeIcon icon={faGithub} className="footer--icon"/></a>
        </footer>
    );
}