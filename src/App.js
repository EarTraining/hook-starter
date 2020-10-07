import React, { useState } from 'react';

const App = () => {
  
//const [value, setValue] = useState(intialState);
const [name, setName] = useState('');


  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
    </div>
  );
};

export default App;
