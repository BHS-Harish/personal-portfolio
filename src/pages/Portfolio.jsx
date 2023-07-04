import React from "react";
import NavBar from "../components/NavBar";
import { Row, Col } from 'antd';
import { projects } from '../utils/data';
import { BsRocketFill } from 'react-icons/bs';
import '../styles/Portfolio.css';
function Portfolio() {
    return (
        <>
            <div className='animate__animated animate__fadeInRight w-100'>
                <NavBar option={""} />
                <Row style={{ height: "100px" }}>
                    <Col span={22} offset={1} className='d-flex justify-content-center align-items-center'>
                        <h1 className='font-primary txt-white page-title' style={{ position: "relative" }}><span className='txt-secondary'>P</span>ortfolio</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={1}>
                        <h1 className='font-primary txt-white text-center' style={{ fontSize: "2.5em" }}><span className='txt-secondary'>W</span>eb <span className="txt-secondary">P</span>rojects</h1>
                    </Col>
                    <Col span={22} offset={1} className="d-flex justify-content-center align-items-center flex-wrap py-4">
                        {
                            projects && projects?.web.map((value, index) => {
                                return (
                                    <div className="bg-white my-3 mx-3 d-flex flex-column align-items-center" style={{ width: "300px", height: "340px", borderRadius: "20px" }} data-aos="fade-in" key={index}>
                                        <img src={value.bannerUrl} alt={value.name} className="w-100 h-auto shadow" style={{ borderRadius: "20px" }} />
                                        <h4 className="font-primary txt-primary text-center mt-4">{value.name}</h4>
                                        <a href={value.livePreview} className="d-block text-center py-2 rounded text-decoration-none font-primary my-2 px-5 back-primary txt-white preview-btn" target="_blank" rel="noreferrer">Live Preview</a>
                                        <a href={`/portfolio/${value.path}`} className="d-block text-center py-1 rounded text-decoration-none font-primary my-1 px-5 fs-6 txt-primary readmore-btn" target="_blank" rel="noreferrer">Read more</a>
                                    </div>
                                )
                            })
                        }

                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={1}>
                        <h1 className='font-primary txt-white text-center' style={{ fontSize: "2.5em" }}><span className='txt-secondary'>D</span>esktop <span className="txt-secondary">P</span>rojects</h1>
                    </Col>
                    <Col span={22} offset={1} className="d-flex justify-content-center align-items-center flex-wrap py-4">
                        {
                            projects && projects?.desktop.map((value, index) => {
                                return (
                                    <div className="bg-white my-3 mx-3 d-flex flex-column align-items-center" style={{ width: "300px", height: "300px", borderRadius: "20px" }} data-aos="fade-in" key={index}>
                                        <img src={value.bannerUrl} alt={value.name} className="w-100 h-auto shadow" style={{ borderRadius: "20px" }} />
                                        <h4 className="font-primary txt-primary text-center mt-4">{value.name}</h4>
                                        <a href={`/portfolio/${value.path}`} className="d-block text-center py-1 rounded text-decoration-none font-primary my-1 px-5 fs-6 txt-primary readmore-btn" target="_blank" rel="noreferrer">Read more</a>
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
export default Portfolio;