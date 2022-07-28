import React from 'react';
import S from './Cards.module.css';

const Cards = ({dados}) => {
  const { id, name, image, descri, preçoAntigo, preço } = dados;
  return (
    <div className={S.cards}>
      <img src={image} alt=""/>
      <div>
      <h3>{name}</h3>
        <p className={S.descri}>{descri}</p>
        <small>
          DE: <span>R${preçoAntigo}</span>
        </small>
        <p className={S.preço}>
          Por: <span>R${preço}</span>
        </p>
        <button>Comprar</button>
      </div>
    </div>
  )
}

export default Cards

  