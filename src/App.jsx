// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo' 
import Like from './Like';

function App() {
  
  const name = 'vine';
  const x = 12;
  const y =4;

  
  return (
    
   
   
    <>
    <h1 style={{color:'red', fontFamily:'monospace'}}>my app </h1>
    <h2 style={{color:'GrayText'}}>sum of {x} and {y} is 16</h2>
    
    <Demo likes={2} Name={'mithun'}/>
    
    <Demo likes={5} Name={'hi'}/>
   
    <Demo likes={8} Name={'HELLO'}/>
    
    <Demo/>

    <Like/>
   
    
    </>
  )
}

export default App
