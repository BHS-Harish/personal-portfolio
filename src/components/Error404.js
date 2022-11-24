import React from "react";
import './style/Error404.css';
import error from '../asset/404error.png';
function Error404(){
    return(
        <div id="Error404-container">
            <img src={error} alt="errorimage"/>
            <h1>Page Not Found..!</h1>
            <a href="/">Go Back...</a>
        </div>
    )
}
export default Error404;