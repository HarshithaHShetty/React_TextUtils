import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, { useState } from 'react';
function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const togglemode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
    }else {
      setMode('dark')
      document.body.style.backgroundColor='#032643';
      showAlert("dark mode enabled","success");    
    }

  }
  return (
    <>

   <Navbar Title="TextUtils" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm heading="Enter Text" mode={mode} showAlert={showAlert} />
   </div>
        
  </>
  );
}

export default App;
