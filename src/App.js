import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';

const App = () => {
  const [Mode, setMode ] = useState('dark'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
   if(Mode === 'light'){
       setMode('dark');
   }
     else{
       setMode('light');
  }
}
  return (
    <>
     <Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode} />
     <div className="container my 3">
      <TextForm heading="Enter the text to analyze below"/>
      {/* <About/> */}
     </div>
    </>
  );
}

export default App;
