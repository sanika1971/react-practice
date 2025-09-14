import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';

const App = () => {
  const [Mode, setMode ] = useState('dark'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
   if(Mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'grey';
   }
     else{
       setMode('light');
        document.body.style.backgroundColor = 'white';
  }
}
  return (
    <>
     <Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode} />
     <div className="container my 3">
      <TextForm heading="Enter the text to analyze below" mode={Mode}/>
      {/* <About/> */}
     </div>
    </>
  );
}

export default App;
