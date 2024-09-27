import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  let [changeData, setChangeData] = useState();

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/images?_width=380")
      .then(response => response.json())
      .then(data => setChangeData(data))

    console.log(changeData)
  }, [])

  return (
    <div className="App">
      <Card />

    </div>
  );
}

export default App;
