import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  
//const [value, setValue] = useState(intialState);
/*  Moved for Video 7 **
//const [name, setName] = useState('');

//useEffect(() => {
  //updates actual tab title w/o interrupting lifecycle
  //document.title = name;
//})
*/
 
  const [name, setName] = useTitleInput('');

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
