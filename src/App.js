import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let [changeData, setChangeData] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/images?_width=380")
      .then(response => response.json())
      .then(data => {
        setChangeData(data.data);
        console.log(changeData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const cards = changeData.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      card component will go here
      {/* <Card data={changeData} /> */}
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;


// Copy of the data coming through

// {
//   title: "Ducimus et sed et.",
//   description: "Est vel assumenda soluta nostrum dolores non. Qui alias molestiae rerum quidem perspiciatis sed qui. Consequatur numquam dicta non expedita quia.",
//   url: "https://picsum.photos/380/480"
//   },