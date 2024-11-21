import './App.css';
import Childcom from './Childcom.js';
import { useState } from 'react';

function App() {
  const [childname,setChildname]=useState("Default");
  const receiveName=(name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
     <h1>Hello React I'm Parent</h1>
     <Childcom setfun={receiveName}/>
     <p> Parent: My child said : {childname} </p>
    </div>
  );
}

export default App;
