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


// Copy of the data coming through

// {
//   title: "Ducimus et sed et.",
//   description: "Est vel assumenda soluta nostrum dolores non. Qui alias molestiae rerum quidem perspiciatis sed qui. Consequatur numquam dicta non expedita quia.",
//   url: "https://picsum.photos/380/480"
//   },