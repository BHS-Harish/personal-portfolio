import React, { useEffect, useState } from "react";
import ProjectPreview from '../components/ProjectPreview';
import Error from '../components/Error';
import {path,projects} from '../utils/data';
import {useParams} from 'react-router';
function Project(){
    const {project}=useParams();
    const [allProjects,setAllProjects]=useState([]);
    const[currentProject,setCurrentProject]=useState({});
    useEffect(()=>{
        projects.web.filter((value)=>allProjects.push(value))
        projects.desktop.filter((value)=>allProjects.push(value))
        if(path.includes(project))
        {
            setCurrentProject(allProjects.filter((value)=>value.path===project))
        }
        // eslint-disable-next-line
    },[])
    return(
        <>
            {
                path.includes(project)?
                <ProjectPreview project={currentProject[0]}/>:
                <Error/>
            }
        </>
    )
}
export default Project;