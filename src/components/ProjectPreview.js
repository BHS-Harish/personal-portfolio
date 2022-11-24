import React from "react";
import Menu from './Menu';
import './style/ProjectPreview.css';
function ProjectPreview({id}){
    return(
        <div id='project-preview-container'>
            <Menu/>
            <img src={id.banner} className="project-banner" alt="banner"/>
            <h1>{id.title}</h1>
            <div className="tech-used-container">
                {
                    id.techused.map((value)=>{
                        return(
                            <p>{value}</p>
                        )
                    })
                }
            </div>
            {
                id.desc.map((value)=>{
                    return(
                        <p>{value}</p>
                    )
                })
            }
            <h1>Screenshots</h1>
            <div className="project-screenshot-container">
                {
                    id.screenshot.map((image)=>{
                        return(
                            <img src={image} className="project-screenshot" alt="screenshot"/>           
                        )
                    })
                }
            </div>
        </div>

    )
}
export default ProjectPreview;