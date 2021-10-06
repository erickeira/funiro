import React from 'react'
import ReactDOM from 'react-dom'
import Topo from './componentes/topo'
import Produtos from './componentes/produtos'
import Rodape from './componentes/rodape'
import ImageSlider from './componentes/slider'
import './index.css'
import SliderData from './componentes/slider/sliderdata'

ReactDOM.render(
  <div>
    <Topo></Topo>
    <ImageSlider slides={SliderData}></ImageSlider>
    <Produtos></Produtos>
    <Rodape></Rodape>
  </div>,

  document.getElementById('root')
)