import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DealRoute from './DealRoute';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './Routers/LoginApp';
//<Route path="/products" element={<Products />} />
let a;
await fetch('http://localhost:5000/')
.then(got =>{
  return got.json()
})
.then(res => {
  a = res 
  console.log(a.works);
} )

function App() {
  return (
    <div className="App">
      <DealRoute/>
      
    </div>
  )
}

export default App
