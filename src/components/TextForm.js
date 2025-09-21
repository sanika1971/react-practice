import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
     props.showAlert("Converted to lowercase","success");
  }
  const handleTitleCaseClick = ()=>{
    let newText = text.toTitleCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }
   const handleReverseCaseClick = ()=>{
    let newText = text.toReverseCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }
  const handleclearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Converted to lowercase","success");
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
    <div className='container' style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear Text</button>
     <button className="btn btn-primary mx-1 my-3" onClick={handleTitleCaseClick}>Title Case</button>
     <button className="btn btn-primary mx-1 my-3" onClick={handleReverseCaseClick}>Reverse Case</button>

    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h2>Your text summry</h2>
      <p>{text.split("").length}words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}

