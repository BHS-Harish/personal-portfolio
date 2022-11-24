import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from './Menu';
import './style/Home.css';
import image from '../asset/home-page-image.png';
import resume from '../asset/balaharisankar.pdf';
function Home (){
    const navigate=useNavigate();
    return(
        <div id="home-container">
            <Menu/>
            <div id="home-container-row1">
                <div className="home-container-row1-col1">
                    <h1>I'M</h1>
                    <h1>
                        <p>Bala</p>
                        <p>Hari</p>
                        <p>Sankar</p>
                    </h1>
                    <div className="home-container-row1-col2">
                        <a href="/about">
                            <button>ABOUT ME</button>
                        </a>
                        <a href={resume} download>
                            <button>DOWNLOAD CV</button>
                        </a>
                    </div>
                </div>
                <div className="home-container-row1-col3">
                    <img src={image} alt="my-pic"/>
                </div>
            </div>     
            <div id="home-container-row2">
                <div onClick={()=>{
                    navigate('/portfolio');
                }}></div>
                <div onClick={()=>{
                    navigate('/contact');
                }}></div>
            </div>       
        </div>
    )
}

export default Home;