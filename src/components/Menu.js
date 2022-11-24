import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style/Menu.css';
function Menu() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true);
    return (
        <>
            <nav>
                <p onClick={() => {
                    navigate('/');
                }}>BHS</p>
                {menu ?
                    <div id="menu-icon" onClick={() => {
                        setMenu(!menu)
                    }}>
                    </div> :
                    <div id="close-icon" onClick={() => {
                        setMenu(!menu)
                    }}>
                    </div>
                }
            </nav>
            {
                (()=>{
                    if(!menu){
                        return(
                            <>
                            <div id="menu-display">
                                <h1 onClick={()=>{
                                    navigate('/');
                                }}>HOME</h1>
                                <h1 onClick={()=>{
                                    navigate('/about');
                                }}>ABOUT</h1>
                                <h1 onClick={()=>{
                                    navigate('/portfolio');
                                }}>PORTFOLIO</h1>
                                <h1 onClick={()=>{
                                    navigate('/contact');
                                }}>CONTACT</h1>
                            </div>
                            </>
                        )
                    }
                })()
            }
        </>
    )
}

export default Menu;