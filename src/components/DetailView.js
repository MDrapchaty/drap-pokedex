import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type1, type2, height, weight} = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>{name} {id}</h1>
        <p className={type1}>{type1}</p>
        <p className={type2}>{type2}</p>
        <p className="data-char"> <div>  <br /> {height}  {weight}</div></p>
        

      </div>
    </section>
  )
}

export default DetailView;