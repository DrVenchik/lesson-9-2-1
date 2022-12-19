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


  return (
    <div>
      <Stars items={items} />
    </div>
  );
}



export default App;
