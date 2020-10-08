import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  

//const [value, setValue] = useState(intialState);
//const [name, setName] = useState('');

//useEffect(() => {
  //updates actual tab title w/o interrupting lifecycle
  //document.title = name;
//})
 
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  //console.log('ref', ref.current);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick ={() => ref.current.classList.add('new-fake-class')}>Level Up Dishes</h1>
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
