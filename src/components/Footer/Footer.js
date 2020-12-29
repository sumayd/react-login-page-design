import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';
import { Container, Row, Col } from 'fluid-react';

const Footer= () => (
  <div className="footer">
    <Container>
      <Row>
      <Col xs="12" md="8">
      <div class="footer-left">
      <ul class="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Apps</a></li>
        <li><a href="/">Contact</a></li>
    </ul>

    </div>
    </Col>
    <Col xs="12" md="4">
      <div class="footer-right">
          <a href="https://github.com/sumeyye-aydemir" rel="noreferrer" target="_blank"><FontAwesomeIcon className ='font-awesome' icon={faGithub} /></a>
          <a href="http://linkedin.com/in/sumeyyeaydemir" rel="noreferrer" target="_blank"><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></a>
          <a href="https://mobile.twitter.com/smyyaydmr" rel="noreferrer" target="_blank"><FontAwesomeIcon className ='font-awesome' icon={faTwitter} /></a>
      </div>
    </Col>
  </Row>
</Container>
{/* <p>Sümeyye Aydemir &copy; 2020</p> */}
</div>
)
export default Footer;