import React from 'react';

export default function Card(props) {
  return (
    <div className='card'>
      <img className='card-image' src={props.item.url} alt={props.item.title} />
      <h2 className='card-title'>{props.item.title}</h2>
      <p className='card-description'>{props.item.description}</p>
    </div>
  );
}
