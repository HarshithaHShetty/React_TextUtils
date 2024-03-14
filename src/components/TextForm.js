import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] =useState('Enter text here');
    const handleUpclick = () =>{
        //console.log("Uppercase" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("text converted to Uppercase","success");  

    }
    const handleLowclick = () =>{
      //console.log("Uppercase" + text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("text converted to Lowercase","success");  

  }
    const handleChange = (event) =>{
        //console.log("Onchange");
        setText(event.target.value)
    }
    
    const handleemail = () =>{
      const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      let newText2=text.match(email) || [];
        setText(newText2.join(", "))
    }
    
   
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpclick} >ConvertToUppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowclick} >ConvertToLowerercase</button>
        <button className="btn btn-primary mx-2" onClick={handleemail} >ExtracEmailAddress</button>
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1> Your text summary</h1>
      <p>{text.split(" ").length} and {text.length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
