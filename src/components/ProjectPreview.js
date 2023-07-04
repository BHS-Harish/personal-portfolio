import React from "react";
import {Row,Col} from 'antd';
import { BsRocketFill } from 'react-icons/bs';
import {BiLink,BiSolidShareAlt} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import '../styles/ProjectPreview.css';
function ProjectPreview({project}){
    return(
        <>
            <Row>
                <Col span={22} offset={1} className="d-flex align-items-center flex-column mt-3">
                    <img src={project?.bannerUrl} alt={project?.name} className="banner-img my-5"/>
                    <h1 className="fw-bold txt-secondary">{project?.name}</h1>
                    <h4 className="txt-white fw-light text-center">{project?.description}</h4>
                </Col>
            </Row>
            <Row>
                <Col span={22} offset={1} className="preview-container d-flex justify-content-center align-items-center flex-wrap mt-4 mb-5">
                    {
                        project&&project?.techUsed.map((tech,index)=>{
                            return(
                                <span className="px-3 py-2 mx-1 my-2 back-secondary txt-primary fw-bold rounded" key={index}>{tech}</span>
                            )
                        })
                    }
                </Col>
                <Col span={22} offset={1} className="d-flex justify-content-center align-items-center my-2">
                    <BiLink className="fs-1 mx-3 txt-white pointer" title="Live Preview" onClick={()=>{
                        window.open(project?.livePreview,"_blank")
                    }}/>
                    <BiSolidShareAlt className="fs-1 mx-3 txt-secondary pointer" title="Share this page" onClick={async()=>{
                        if (navigator.share) {
                            const shareDetails = { url: window.location.href, title: `${project?.name} | Balaharisankar`, text: "Please visit his project page" };
                            await navigator.share(shareDetails);
                        }
                        else {
                            console.log("Your Browser shouldn't support Web share")
                        }
                    }}/>
                    <AiFillHome className="fs-1 mx-3 txt-white pointer" title="Back To Home" onClick={()=>{window.open('/','_self')}}/>
                </Col>
            </Row>
            <Row>
                <Col span={22} offset={1} className="preview-container d-flex flex-column align-items-center mt-4 mb-5">
                    {
                        project&&project?.details.map((detail,index)=>{
                            return(
                                <p className="details fs-6 txt-white fw-light" key={index}>{detail}</p>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col span={22} offset={1} className="preview-container d-flex flex-column align-items-center mt-4 mb-5">
                    <h2 className="txt-white text-start">Screenshots</h2>
                </Col>
                <Col span={22} offset={1} className="preview-container d-flex flex-column align-items-center mt-1 mb-5">
                    {
                        project&&project?.screenshots.map((screenshot,index)=>{
                            return(
                                <img src={screenshot} alt="balaharisankar-projects-screenshot" className="my-2 project-screenshot" key={index}/>
                            )
                        })
                    }
                </Col>
            </Row>
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
export default ProjectPreview;