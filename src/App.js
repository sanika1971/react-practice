import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
// import TextForm from './components/TextForm';

const App = () => {
  return (
    <>
     <Navbar title="TextUtils" aboutText="About TextUtils" />
     <div className="container my 3">
      {/* <TextForm heading="Enter the text to analyze"/> */}
      <About/>
     </div>
    </>
  );
}

export default App;
