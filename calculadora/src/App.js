import React, {useState} from 'react'
import './App.css';
import Calc from './utils/fcalc';

export default function App() {

  const [display,setDisplay]=useState("0");
  const [opt,setOpt]=useState("")

  const dp=(e)=>{
    setDisplay(display+e)
  }

  const op=(e)=>{ 
    setOpt(e) 
  }

  const handleClick=(e)=>{
      dp(e)
      op(e)
  }

  const equal=(d)=>{
    setDisplay(Calc(opt,d));
  }

  const clear=()=>{
    setDisplay(0);
  }

  return (
    <div className="App">
      <div className="content">
        <div className="display">
          <input type="text" value={display} onChange={()=>{setDisplay()}} readOnly/>
        </div>

        <div className="keyboard">
          <div className="lines">
          <section className="line1">
              <button className="clear" onClick={()=>{clear()}}>c</button> 
              <input type="text" value="x" readOnly className="operator" onClick={(e)=>{handleClick(e.target.value)}}/>
              <input type="text" value="÷" readOnly className="operator" onClick={(e)=>{handleClick(e.target.value)}}/>
              <input type="text" value="-" readOnly className="operator" onClick={(e)=>{handleClick(e.target.value)}}/>
           </section> 
           <section>
              <input type="text" value="1" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
              <input type="text" value="2" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
              <input type="text" value="3" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
           </section> 
           <section>
              <input type="text" value="4" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
              <input type="text" value="5" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
              <input type="text" value="6" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
           </section> 
           <section>
              <input type="text" value="7" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
              <input type="text" value="8" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
              <input type="text" value="9" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
           </section> 
           <section>
              <button type="text" className="equal" onClick={()=>{equal(display)}}> = </button>
              <input type="text" value="0" readOnly className="numbers" onClick={(e)=>{dp(e.target.value)}}/>
              <input type="text" value="+" className="operator" readOnly onClick={(e)=>{handleClick(e.target.value)}}/>
           </section>
          </div>
        </div>
      </div>      
    </div>
  );
}


