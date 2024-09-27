import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [changeData, setChangeData] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/images?_width=380")
      .then(response => response.json())
      .then(data => {
        setChangeData(data.data);
        console.log(data.data); // Log the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const cards = changeData.map(item => (
    <Card
      key={item.id}
      item={item}
    />
  ));

  return (
    <div className="App">
      <div className='card-container'>
        {cards}
      </div>
    </div>
  );
}

export default App;
