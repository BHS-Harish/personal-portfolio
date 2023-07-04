import React from 'react';
import {useNavigate} from 'react-router';
import { Row, Col } from 'antd';
import NavBar from '../components/NavBar';
import '../styles/Home.css';
import { BsFillCaretLeftFill,BsFillCaretRightFill } from 'react-icons/bs';
import homeimg from '../assets/home-img.png';
import resume from '../assets/resume.pdf';
function Home() {
    const navigate=useNavigate();
    return (
        <div style={{height:"100vh"}} className='animate__animated animate__fadeIn animate__slow'>
            <NavBar option={"home"}/>
            <Row className='main'>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }} className='h-100 main-section d-flex flex-column justify-content-center'>
                    <h3 className='font-primary txt-secondary hey-there'>Hey There .</h3>
                    <h1 className='font-primary txt-secondary name' style={{ fontSize: "2.3rem" }}>I'<span className='txt-white'>m</span> B<span className='txt-white'>alaharisankar</span></h1>
                    <p className='font-secondary txt-white fs-6 enthusiast'>Full Stack Web Development enthusiast</p>
                    <div className='w-100 my-2'>
                        <a className='home-btn txt-primary back-secondary' href='https://www.linkedin.com/in/balaharisankar/' target='_blank' rel="norefferer">Let's connect</a>
                        <a className='home-btn txt-primary back-white' href={resume} download>Download Resume</a>
                    </div>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }} className='h-100 main-section d-flex flex-column justify-content-center align-items-center'>
                    <img src={homeimg} alt="balaharisankar-img" className='home-img' />
                </Col>
            </Row>
            <Row className='home-footer'>
                <Col span={22} offset={1} className='d-flex justify-content-between align-items-center'>
                    <p style={{ fontSize: "25px" }} className='m-0 fw-bold font-primary d-flex align-items-center txt-white menu pointer' onClick={()=>{
                        navigate('/contact')
                    }}><BsFillCaretLeftFill className='txt-secondary' /> CONTACT</p>
                    <p style={{ fontSize: "25px" }} className='m-0 fw-bold font-primary d-flex align-items-center txt-white menu pointer' onClick={()=>{
                        navigate('/portfolio')
                    }}>PORTFOLIO <BsFillCaretRightFill className='txt-secondary' /></p>
                </Col>
            </Row>
        </div>
    )
}
export default Home;