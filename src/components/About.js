import React from 'react';
import Menu from './Menu';
import './style/About.css';
function About() {
    let skills=["C","C++","C#","Java","React Js","JS","CSS","HTML","Figma","Coreldraw"];
    return (
        <div id='about-container'>
            <Menu />
            <h1>
                <p>About</p>
                <p>Me</p>
            </h1>
            <div className='about-container-myimage'>

            </div>
            <h2>I'm Balaharisankar from Rajapalayam</h2>
            <h3>I'm Passionate about Web designing and Frontend Devolopment</h3>
            <h1 className='underline-subtitle'>
                <p>My</p>
                <p>Skills</p>
            </h1>
            <div className='my-skills-container'>
                {
                    skills.map((value)=>{
                        return(
                            <div className='my-skills'>
                                {value}
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='underline-subtitle'>
                <p>Qualification</p>
            </h1>
            <h3 className='about-qualifi'>2020-2023<h2>BCA-Present @ ANJAC</h2></h3>
            <h3 className='about-qualifi'>2018-2020<h2>HSE TN STATEBOARD</h2></h3>
            <h3 className='about-qualifi'>2017-2018<h2>SSLC TN STATEBOARD</h2></h3>
            <h1 className='underline-subtitle'>
                <p>Certifications</p>
            </h1>
            <div className='certificate-container'>
                <p>React Js</p>
                <p>Career Growth 360</p>
                <a href='https://careergrowth360.com/?cert_hash=8afb6a9501288fc1&regenerate=1'><button>View Certificate</button></a>
            </div>
            <div className='certificate-container'>
                <p>HTML5 - From Basics to Advanced level [2022]</p>
                <p>Udemy</p>
                <a href='https://www.udemy.com/certificate/UC-b5a79f3d-1e66-4719-bb9a-cedb8f8c89fa/'><button>View Certificate</button></a>
            </div>
            <div className='certificate-container'>
                <p>CSS - Basics to Adv for front end development [2022]</p>
                <p>Udemy</p>
                <a href='https://www.udemy.com/certificate/UC-71dd2789-3623-4fbf-88c3-e5d4864d3f5c/'><button>View Certificate</button></a>
            </div>
        </div>
    );
}
export default About;