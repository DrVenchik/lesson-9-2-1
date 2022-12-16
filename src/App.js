import React from "react";

import './App.css';
import Stars from './components/Stars';

function App() {
  const items = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
  ];

  function range(e) {
    alert(`Вы поставили ${e.currentTarget.id} звезд(ы)`)
  }

  return (
    <div>
      <Stars items={items} addStars={range} />
    </div>
  );
}



export default App;
