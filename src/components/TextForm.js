import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
        console.log("Uppercase" + text);
        let newText=text.toUpperCase();
        setText(newText)

    }
    const handleChange = (event) =>{
        console.log("Onchange");
        setText(event.target.value)
    }
    
    const [text, setText] =useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpclick} >ConvertToUppercase</button>
        </div>
    </div>
  )
}
