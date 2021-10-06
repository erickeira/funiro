import React from 'react';
import './style.css'
import coracao from "../../images/coracao.png";
import carrinho from "../../images/carrinho.png"
import usuario from "../../images/usuario.png"
import seta from "../../images/seta_menu.png"



function topo(){
    return (
        <div className="top">
            <div className="navbar">  
                
                <nav className="menu">
                    <span className="home"><a>Funiro.</a></span>  
                    <a>Produtos <img src={seta}></img></a>
                    <a>Salas <img src={seta}></img></a>
                    <a>Inspirações</a>
                    
  
                    <input type="text" className="cxpesquisa" placeholder="Buscar..."/>

                    <div className="usuarea">
                    <a><img src={coracao} alt="Favoritos"/></a>
                    <a><img src={carrinho} alt="Carrinho"/></a>
                    <a><img src={usuario} alt="Usuario"/></a>
                    </div>
                </nav>

                
            </div>
        </div>
    );
};


    export default topo;