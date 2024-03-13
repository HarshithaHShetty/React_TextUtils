import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>

   <Navbar Title="TextUtils"/>
   <div className="container my-3">
   <TextForm heading="Enter Text"/>
   </div>
        
  </>
  );
}

export default App;
