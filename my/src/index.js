import React from 'react'
import ReactDOM from 'react-dom'
import Topo from './componentes/topo'
import Rodape from './componentes/rodape'
import Slider from './componentes/slider'
import './index.css'

ReactDOM.render(
  <div>
    <Topo></Topo>
    <Slider></Slider>
    <Rodape></Rodape>
  </div>,

  document.getElementById('root')
)