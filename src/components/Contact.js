import React from 'react';
import Menu from './Menu';
import './style/Contact.css';
function Contact() {
    return (
        <div id='contact-container'>
            <Menu />
            <h1>
                <p>Contact</p>
                <p>Us</p>
            </h1>
            <div id='contact-container-row1'>
                <a href='https://wa.me/9626295434?text=Hello%20Harish%20,How%20are%20you..?'><div className='contact-container-row1-col1'>
                    <div>

                    </div>
                    <h4>+91 9626295434</h4>
                </div></a>
                <a href="mailto:balaharisankar2003@gmail.com"><div className='contact-container-row1-col2'>
                    <div>

                    </div>
                    <h4>balaharisankar2003@gmail.com</h4>
                </div></a>
            </div>
            <a href='https://goo.gl/maps/9K84kDXVkkt2x1hN6' id='contact-container-row2'>
                <div id="contact-container-row2-col1">
                    <div>

                    </div>
                    <h4>355,Sivakamipuram Street,Rajapalayam-626 117,Tamil Nadu</h4>
                </div>
            </a>
            <div id="social-media-icon">
                <a href='https://instagram.com/lovely_harish_45?igshid=YmMyMTA2M2Y=' className='links' rel='noreferrer' target={'_blank'}>
                    <div>

                    </div>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100013790053083' target={'_blank'} rel='noreferrer' className='links'>
                    <div>

                    </div>
                </a>
                <a href='https://mobile.twitter.com/Lovely_harish_' target={'_blank'} rel='noreferrer' className='links'>
                    <div>

                    </div>
                </a>
                <a href='https://www.linkedin.com/in/balaharisankar-l-09a2ba258' target={'_blank'} rel='noreferrer' className='links'>
                    <div>

                    </div>
                </a>
                <a href='https://github.com/BHS-Harish' target={'_blank'} rel='noreferrer' className='links'>
                    <div>

                    </div>
                </a>
            </div>
        </div>
    )
}
export default Contact;