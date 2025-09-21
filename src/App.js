import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App (){
  const [Mode, setMode ] = useState('light'); // Whether dark mode is enabled or not
    const[alert, setAlert] = useState(null);

     const showAlert = (message, type) => {
          setAlert({
             msg: message,
             type: type
          })
          setTimeout(() => {
            setAlert(null);
          }, 1500);
     }
  const toggleMode = ()=>{
   if(Mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'grey';
       showAlert("Dark mode has been enabled","success");
   }
     else{
       setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success");
  }
}
  return (
    <>
     <Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
     <div className="container my 3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
      {/* <About/> */}
     </div>
    </>
  );
}

export default App;
