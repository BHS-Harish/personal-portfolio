import React from 'react';
import {useNavigate} from 'react-router';
import {Row,Col} from 'antd';
import {BsFillCaretRightFill} from 'react-icons/bs';
import {RiHome7Fill} from 'react-icons/ri';
import '../styles/Home.css';
function NavBar({option}){
    const navigate=useNavigate();
    return(
        <Row className='nav-bar back-primary z-3'>
            <Col span={22} offset={1} className='d-flex justify-content-between align-items-center'>
                <h1 className='font-primary txt-secondary' style={{fontSize:"50px"}}>B<span className='txt-white'>HS</span></h1>
                {
                    option==="home"?
                    <p style={{fontSize:"25px"}} className='m-0 fw-bold font-primary d-flex align-items-center txt-white menu pointer' onClick={()=>{
                        navigate('/about')
                    }}>ABOUT <BsFillCaretRightFill className='txt-secondary'/></p>
                    :
                    <p style={{fontSize:"25px"}} className='m-0 fw-bold font-primary d-flex align-items-center txt-white menu pointer' onClick={()=>{
                        navigate('/')
                    }}>HOME <RiHome7Fill className='txt-secondary mx-1'/></p>
                }
            </Col>
        </Row>
    )
}
export default NavBar;