import React from 'react';
import './style.css';
import {BsTrophy, BsPatchCheck, BsGift} from 'react-icons/bs';
import {MdSupportAgent} from 'react-icons/md';



function Produtos(){
    return(
    <section className="selos">
        <div className="selo"><BsTrophy/> Alta Qualidade</div>
        <div className="selo"><BsPatchCheck/> Proteção Grantida</div>
        <div className="selo"><BsGift/> Entrega Gratis</div>
        <div className="selo"><MdSupportAgent/> Suporte Diário</div>
    </section>

    )
}

export default Produtos;