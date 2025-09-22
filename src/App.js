import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
    <Router>
     <Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
     <div className="container my 3">
      <Routes>
        {/* /users ---> Component 1
            /users/home ---> Components 2 */}
          <Route exact path="/about">
             <Route path="/about" element={<About />} />
          </Route>
          <Route exact path="/">
         <Route path="/" element={<TextForm />} />
          </Route>
        </Routes>
         </div>
        </Router>
    
    </>
  );
}

export default App;
