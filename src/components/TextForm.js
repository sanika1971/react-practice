import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleTitleCaseClick = ()=>{
    let newText = text.toTitleCase();
    setText(newText)
  }
   const handleReverseCaseClick = ()=>{
    let newText = text.toReverseCase();
    setText(newText)
  }
  const handleclearClick = ()=>{
    let newText = '';
    setText(newText)
  }

    const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
   const [text, setText] = useState('');
   //text = "new text"; // Wrong way to change the state
   // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
<div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear Text</button>
     <button className="btn btn-primary mx-1 my-3" onClick={handleTitleCaseClick}>Title Case</button>
     <button className="btn btn-primary mx-1 my-3" onClick={handleReverseCaseClick}>Reverse Case</button>

    </div>
    <div className="container my-3" >
      <h2>Your text summry</h2>
      <p>{text.split("").length}words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}

