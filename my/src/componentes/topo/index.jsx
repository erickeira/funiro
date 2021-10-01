import React from 'react';
import './topo.css'

function topo(){
    return (
        <div className="top">
            <div className="navbar">  
                
                <nav className="menu">
                    <span className="home"><a>Funiro.</a></span>  
                    <a>Products <img src="../../../images/seta_menu.png"></img></a>
                    <a>Rooms</a>
                    <a>Inspirations</a>
                </nav>
            </div>
        </div>
    );
};


    export default topo;