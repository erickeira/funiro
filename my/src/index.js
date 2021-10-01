import React from 'react'
import ReactDOM from 'react-dom'
import Topo from './componentes/topo'
import Rodape from './componentes/rodape'
import './index.css'

ReactDOM.render(
  <div>
    <Topo></Topo>
    <Rodape></Rodape>
  </div>,

  document.getElementById('root')
)