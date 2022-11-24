import React from "react";
import { useParams } from "react-router-dom";
import ProjectPreview from "./ProjectPreview";
import { ProjectData } from "../ProjectData";
import Error404 from './Error404';
function Project(){
    let params=useParams();
    let req=params.projectname;
    if(req==="vanillai"){
        return(
            <ProjectPreview id={ProjectData.vanillai}/>
        )
    }
    else if(req==="personal-portfolio"){
        return(
            <ProjectPreview id={ProjectData.portfolio}/>
        )
    }
    else if(req==="ytmp3"){
        return(
            <ProjectPreview id={ProjectData.ytmp3}/>
        )
    }
    else if(req==="pms"){
        return(
            <ProjectPreview id={ProjectData.pms}/>
        )
    }
    else if(req==="thirukkuraal"){
        return(
            <ProjectPreview id={ProjectData.thirukkuraal}/>
        )
    }
    else{
        return(
            <Error404/>
        )
    }
}
export default Project;