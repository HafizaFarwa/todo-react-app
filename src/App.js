import './App.css';
import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';

function App() {
  const [inputList, setinputList]= useState("");
  const [items, setitems]=useState([]);
  const [flag, setflag]=useState(false);

  const list_of_items=()=>{
    setinputList("")
    setitems([...items, inputList])
    setflag(true)
  };
  const del_item=(id)=>{

  };
  return (
    
        <div className="main_div">
          <div className="centre_div">
            <h1 className="header">TODO-LIST</h1>
            <TextField className= "input-field" type="text"value={inputList} placeholder="Add items in list" 
            onChange={(e) => {setinputList(e.target.value)}}
            id="outlined-basic" label="Add an item"/>
            <button className="btn1"onClick={list_of_items}>+</button>
            <ul className='list'>
              {
                (!flag) ? 
                (<></>) : 
                (
                  items.map((val, id) => val.length === 0 ? <></>:  
                  <div id={id} className='list-item'>
                  <button className="btn2" >x</button>
                  <li>{val}</li>
                  </div>)
                )
              }
            </ul>
          </div>
        </div>
  );
}

export default App;