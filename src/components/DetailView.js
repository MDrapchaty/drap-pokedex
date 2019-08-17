import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type1, type2, ability, height, weight} = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>{name} {id}</h1>
        <p className={type1}>{type1}</p>
        <p className={type2}>{type2}</p>
        <p className='data-abil'> {ability}</p>
        <p className="data-char">  <br /> {height} </p> <p className="data-char"> <span>'   '</span>{weight}</p>
        

      </div>
    </section>
  )
}

export default DetailView;