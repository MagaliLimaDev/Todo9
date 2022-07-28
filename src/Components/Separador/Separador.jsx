import React from 'react'
import S from '../Separador/Separador.module.css'
const Separador = (props) => {
  return (
    <div className={S.separador}>
    <div></div>
    <p>{props.text}</p>
    </div>
  )
}

export default Separador
