import React from 'react';
import './style.css'
import { SliderData } from './sliderdata';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import {useState} from "react";

    const ImageSlider = ({slides}) => {
const [current, SetCurrent] = useState(0);
const length = slides.length  

const nextSlide = () => {
    SetCurrent(current === length - 1 ? 0 : current + 1);
};
const prevSlide = () => {
    SetCurrent(current === 0 ? length - 1 : current - 1);
};

if (!Array.isArray(slides) || slides.length <= 0){
    return null
}

    return (
       
        
        <section className="Slider">
        <span className="Shop-now"> 
            <b>Alta Qualidade </b><br/>
            <b>só para você</b><br/>
                <p> Nossos produtos são feitos selecionados e da melhor qualidade 
                    de materias para o seu sonho de casa.</p>
                    <button>Comprar Agora</button>
        </span>
        
        
        <div className="circles">
        <FaChevronCircleLeft className="circle" onClick={prevSlide} />
        <FaChevronCircleRight className="circle" onClick={nextSlide} />   
        </div>    
        <div className="contorno_slide">
        {SliderData.map((slide, index) => {
            return (
  
                <div className={index === current ? 'slide active' : 'slide' } key={index}>
                    {index === current && 
                    (<img src={slide.image} alt="moveis planejados " className="image"/>)}

                   
                </div>

            )
        })}
        </div>
        </section>
        
        
        
    );
};

export default ImageSlider;