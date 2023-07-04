import React from 'react';
import { Row, Col } from 'antd';
import Marquee from "react-fast-marquee";
import NavBar from '../components/NavBar';
import { programingIcon, experience, certifications, education } from '../utils/data';
import { BsRocketFill } from 'react-icons/bs';
import '../styles/About.css';
import aboutimg from '../assets/aboutimg.png';
function About() {
    return (
        <>
            <div className='animate__animated animate__fadeInRight scroll' style={{ width: "100%", overflow: "hidden" }}>
                <NavBar option={""} />
                <Row style={{ height: "7vh" }}>
                    <Col span={22} offset={1} className='d-flex justify-content-center align-items-center'>
                        <h1 className='font-primary txt-white page-title' style={{ position: "relative" }}><span className='txt-secondary'>A</span>bout <span className='txt-secondary'>M</span>e</h1>
                    </Col>
                </Row>
                <Row className='my-5 py-3 position-relative' >
                    <Col xs={{ span: 22, offset: 1 }} sm={{ span: 18, offset: 3 }} md={{ span: 11, offset: 1 }} lg={{ span: 9, offset: 1 }} xl={{ span: 9, offset: 1 }} className='d-flex justify-content-center align-items-center'>
                        <img src={aboutimg} alt="balaharisankar" className='about-img' data-aos="fade-in" />
                    </Col>
                    <Col xs={{ span: 22, offset: 1 }} sm={{ span: 18, offset: 3 }} md={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 2 }} xl={{ span: 10, offset: 2 }} className='d-flex justify-content-center align-items-center my-5'>
                        <p className='about-me' data-aos="fade-left">
                            I’m Balaharisankar from Rajapalayam.I currently doing my MCA fulltime degree at Ayya Nadar Janaki Ammal College,Sivakasi. I’m passioniate about web development. I’m waiting for opportunity to utilize my skills for the organization. I’m self-starter also always eager to learn new technologies.
                        </p>
                    </Col>
                    <Col span={20} offset={2} className='back-secondary py-4 rounded d-flex justify-content-center align-items-center quote position-absolute' data-aos="flip-up">
                        <q className='m-0 font-primary txt-primary'>PRACTICE MAKES PERFECT</q>
                    </Col>
                </Row>
                <Row className='bg-white'>
                    <Col span={24} className='mt-5 pt-5 mb-5'>
                        <h1 className='text-center font-primary txt-primary' style={{ fontSize: "2.5em" }}>Skills</h1>
                    </Col>
                    <Col span={24} className='mb-5 pb-5'>
                        <Marquee pauseOnHover={true} direction='left' gradient={false}>
                            {
                                programingIcon && programingIcon.map((value, index) => {
                                    return (
                                        <img src={value.src} alt={value.alt} title={value.alt} className='programming-icon' key={index} />
                                    )
                                })
                            }
                        </Marquee>
                    </Col>
                </Row>
                <Row className='py-5'>
                    <Col span={22} offset={1}>
                        <h1 className='font-primary txt-white text-center' style={{ fontSize: "2.5em" }}><span className='txt-secondary'>E</span>xperience</h1>
                    </Col>
                    <Col span={20} offset={2}>
                        {
                            experience && experience.map((value, index) => {
                                return (
                                    <div className='experience font-primary' data-aos="fade-right" key={index}>
                                        <h4 className='txt-white my-2'>{value.title}</h4>
                                        <p className='txt-secondary fs-5 my-1'>{value.organization}</p>
                                        <p className='txt-white fs-6 align-self-end mt-2'>{value.duration}</p>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row className='py-5 back-secondary'>
                    <Col span={22} offset={1}>
                        <h1 className='font-primary text-center txt-primary' style={{ fontSize: "2.5em" }}>Certifications</h1>
                    </Col>
                    <Col span={20} offset={2}>
                        {
                            certifications && certifications.map((value, index) => {
                                return (
                                    <div className='experience font-primary back-primary' style={{ border: "none" }} data-aos="fade-left" key={index}>
                                        <h4 className='txt-white my-2'>{value.courseTitle}</h4>
                                        <p className='txt-secondary fs-5 my-1'>{value.platform}</p>
                                        <a href={value.certificareUrl} className='py-2 px-4 bg-white view-certificate my-3 align-self-end' target='_blank'  rel="noreferrer">View Certificate</a>
                                    </div>
                                )
                            })
                        }

                    </Col>
                </Row>
                <Row className='py-5'>
                    <Col span={22} offset={1}>
                        <h1 className='font-primary txt-white text-center' style={{ fontSize: "2.5em" }}><span className='txt-secondary'>E</span>ducations</h1>
                    </Col>
                    <Col span={20} offset={2}>
                        {
                            education && education.map((value, index) => {
                                return (
                                    <div className='experience font-primary' data-aos="fade-down" key={index}>
                                        <h4 className='txt-white my-2'>{value.program}</h4>
                                        <p className='txt-secondary fs-6 my-1'>{value.college}</p>
                                        <p className='txt-white fs-6 align-self-end mt-2'>{value.duration}</p>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </div>
            <div id='backToTop' onClick={() => {
                window.scroll({
                    top: 0,
                    behavior: "smooth"
                })
            }}>
                <BsRocketFill className='my-0' />
            </div>
        </>
    )
}
export default About;