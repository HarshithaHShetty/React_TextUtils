import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {
  const [mode, setMode]= useState('light');
  
  const togglemode=()=>{
    if(mode==='dark'){
      setMode ('light')
      document.body.style.backgroundColor='white';
    }else {
      setMode('dark')
      document.body.style.backgroundColor='#032643';
    }

  }
  return (
    <>

   <Navbar Title="TextUtils" mode={mode} togglemode={togglemode}/>
   <div className="container my-3">
   <TextForm heading="Enter Text" mode={mode}/>
   </div>
        
  </>
  );
}

export default App;
