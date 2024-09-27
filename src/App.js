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

  return (
    <div className="App">
      card component will go here
      {/* <Card data={changeData} /> */}
    </div>
  );
}

export default App;
