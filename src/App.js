import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {
  
//const [value, setValue] = useState(intialState);
const [name, setName] = useState('');

useEffect(() => {
  document.title = name;
})

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle/>
      <form onSubmit={ e => {
          e.preventDefault();
          // ** FROM VIDEO 5 **
          //formSubmit(name, setName);
        }}>

        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={name}>
        </input>

        <button>SUBMIT</button>
      </form>
    </div>
  );
};
// ** FROM VIDEO 5 **
// const formSubmit = (value, setValue) => {
//   console.log('email sent to '+ value + '!');
//   setValue('');
//  }
export default App;
