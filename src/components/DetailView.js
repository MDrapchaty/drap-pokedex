import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, height, weight} = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <p className="data-char"> <div> Type: {type} <br /> Height: {height} Weight: {weight}</div></p>
        

      </div>
    </section>
  )
}

export default DetailView;