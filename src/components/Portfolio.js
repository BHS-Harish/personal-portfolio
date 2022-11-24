import React from 'react';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';
import './style/Portfolio.css';
function Portfolio() {
    let navigate=useNavigate();
    return (
        <div id='portfolio-container'>
            <Menu />
            <h1>
                <p>Portfolio</p>
            </h1>
            <h1 className='underline-subtitle'>
                <p>Web</p>
                <p>Projects</p>
            </h1>
            <div id='web-projects-container'>
                <div className='portfolio-project-container' onClick={()=>{
                    navigate('/portfolio/vanillai');
                }}>
                    <div className='portfolio-project-image' id='vanillai'>
                    </div>
                    <div className='portfolio-project-desc'>
                        <h3>Vanillai-Weather App</h3>
                        <a href='https://vanillai.netlify.app/'target={'_blank'} rel='noreferrer'><button>Live Preview</button></a>
                    </div>
                </div>
                <div className='portfolio-project-container' onClick={()=>{
                    navigate('/portfolio/personal-portfolio');
                }}>
                    <div className='portfolio-project-image' id='portfolio'>
                    </div>
                    <div className='portfolio-project-desc'>
                        <h3>Personal Portfolio WebApp</h3>
                        <a href='https://bhstechie.netlify.app/' target={'_blank'} rel='noreferrer'><button>Live Preview</button></a>
                    </div>
                </div>
                <div className='portfolio-project-container' onClick={()=>{
                    navigate('/portfolio/ytmp3');
                }}>
                    <div className='portfolio-project-image' id='ytmp3'>
                    </div>
                    <div className='portfolio-project-desc'>
                        <h3>YouTupe To Mp3 Convertor</h3>
                        <a href='https://ytmp3-bhs.netlify.app/' target={'_blank'} rel='noreferrer'><button>Live Preview</button></a>
                    </div>
                </div>
                <div className='portfolio-project-container' onClick={()=>{
                    navigate('/portfolio/thirukkuraal');
                }}>
                    <div className='portfolio-project-image' id='thirukkuraal'>
                    </div>
                    <div className='portfolio-project-desc'>
                        <h3>Thirukkural-Random</h3>
                        <a href='https://thirukkuraal.netlify.app/' target={'_blank'} rel='noreferrer'><button>Live Preview</button></a>
                    </div>
                </div>
            </div>
            <h1 className='underline-subtitle'>
                <p>Window</p>
                <p>Projects</p>
            </h1>
            <div id='web-projects-container'>
                <div className='portfolio-project-container' onClick={()=>{
                    navigate('/portfolio/pms');
                }}>
                    <div className='portfolio-project-image' id='pms'>
                    </div>
                    <div className='portfolio-project-desc'>
                        <h3>Pharmacy Management System</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;