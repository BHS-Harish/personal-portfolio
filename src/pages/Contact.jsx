import React from 'react';
import NavBar from '../components/NavBar';
import {Row,Col} from 'antd';
import {BsLinkedin,BsGithub,BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs';
import {RiWhatsappFill,RiMailFill} from 'react-icons/ri';
import {MdLocationOn} from 'react-icons/md';
import '../styles/Contact.css';
function Contact(){
    return(
        <div className='animate__animated animate__fadeInLeft' style={{height:"100vh"}}>
            <NavBar option={""} />
            <Row style={{height:"7vh"}}>
                <Col span={22} offset={1} className='d-flex justify-content-center align-items-center'>
                <h1 className='font-primary txt-white page-title' style={{position:"relative"}}><span className='txt-secondary'>C</span>ontact <span className='txt-secondary'>M</span>e</h1>
                </Col>
            </Row>
            <Row style={{height:"80vh"}}>
                <Col span={22} offset={1} className='d-flex justify-content-center align-items-center'>
                    <div className='contact-container'>
                        <div className='linkedin contact-icon' title='Balaharisankar | LinkedIn' onClick={()=>{
                            window.open('https://linkedin.com/in/balaharisankar','_blank')
                        }}><BsLinkedin/></div>
                        <div className='whatsapp contact-icon' title='Whatsapp' onClick={()=>{
                            window.open('https://wa.me/9626295434?text=Hello%20Balaharisankar,%20Reference%20from%20your%20website','_blank')
                        }}><RiWhatsappFill/></div>
                        <div className='mail contact-icon' title='Email' onClick={()=>{
                            window.open('mailto:balaharisankar2003@gmail.com','_blank')
                        }}><RiMailFill/></div>
                        <div className='github contact-icon' title='GitHub' onClick={()=>{
                            window.open('https://github.com/BHS-Harish','_blank')
                        }}><BsGithub/></div>
                        <div className='instagram contact-icon' title='Instagram' onClick={()=>{
                            window.open('https://instagram.com/lovely_harish_45?igshid=YmMyMTA2M2Y=','_blank')
                        }}><BsInstagram/></div>
                        <div className='facebook contact-icon' title='Facebook' onClick={()=>{
                            window.open('https://www.facebook.com/profile.php?id=100013790053083','_blank')
                        }}><BsFacebook/></div>
                        <div className='twitter contact-icon' title='Twitter' onClick={()=>{
                            window.open('https://mobile.twitter.com/Lovely_harish_','_blank')
                        }}><BsTwitter/></div>
                        <div className='address contact-icon' title='Rajapalayam-626117,Tamilnadu' onClick={()=>{
                            window.open('https://goo.gl/maps/9K84kDXVkkt2x1hN6','_blank')
                        }}><MdLocationOn /></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Contact;