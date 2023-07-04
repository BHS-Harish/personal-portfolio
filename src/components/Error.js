import React from "react";
import {Row,Col} from 'antd';
import errorimg from '../assets/errorimg.png';
import { useNavigate } from "react-router";
import '../styles/Error.css';
function Error(){
    const navigate=useNavigate();
    return(
        <Row className="w-100" style={{height:"100vh"}}>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }} className='d-flex flex-column justify-content-center align-items-center error-container'>
                <img src={errorimg} alt="error-img" className="error-img" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500"/>
            </Col>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 8}} lg={{ span: 8}} xl={{ span: 8}} className='d-flex flex-column justify-content-center align-items-center error-container'>
                <h1 className="font-primary text-center txt-secondary" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1500">The page doesn't exist</h1>
                <button className="px-4 py-2 rounded font-primary bg-white my-4 fs-6 back-btn" style={{textDecoration:"none"}} data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" onClick={()=>{
                    navigate('/')
                }}>It's okay.. Go Back</button>
            </Col>
        </Row>
    )
}
export default Error;