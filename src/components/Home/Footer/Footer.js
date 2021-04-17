import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <main className="footerMain">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <p><b>Connect with us -</b></p>
                    <p><FontAwesomeIcon icon={faFacebook} size="2x"/></p>
                    <p><FontAwesomeIcon icon={faTwitter} size="2x"/></p>
                    <p><FontAwesomeIcon icon={faLinkedin} size="2x"/></p>
                    <p><FontAwesomeIcon icon={faInstagram} size="2x"/></p>
                </div>
                <div className="col leftBorder">
                    <p><b>Our Contacts -</b></p>
                    <p>+0011-22 33 44 55</p>
                    <p>+0011-22 33 44 55</p>
                    <p>+0011-22 33 44 55</p>
                    <p>+0011-22 33 44 55</p>
                </div>
                <div className="col leftBorder">
                    <b>
                        <p>Copyright &copy; 2021,</p>
                        <p>by <a href="mailto:azizsheq@gmail.com">Azizul Hoque</a></p>
                        <p>All rights reserved.</p>
                    </b>
                </div>
            </div>
        </main>
    );
};

export default Footer;