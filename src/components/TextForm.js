import React, {useState} from 'react'

export default function TextForm(props) {
   const [text, setText] = useState('Enter text here2');
   //text = "new text"; // Wrong way to change the state
   // setText("new text"); // Correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
      <textarea className="form-control" value={text} id="mybox" rows="8"></textarea>
</div>
  <button className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
    </div>
  )
}

