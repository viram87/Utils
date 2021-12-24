import './App.css';


import TextForm from './components/TextForm';

import Navbar from './components/Navbar';
import React , {useState} from 'react';
import Alert from './components/Alert';



function App() {

  const showAlert = (message , type)=> {

    setAlert({
      msg: message ,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=> {

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been Activated' , 'Success')
    }
    else
    {
      setMode('light');
      
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been Activated' , 'Success')


    } 

  }

const [mode, setMode] = useState('light');

const [alert, setAlert] = useState(null);


  return (
   

 
<>
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />

 <Alert alert = {alert} />

<div className="container">
     
          
        
          <TextForm heading = "Enter your text" mode={mode} />
          
       
</div>

</>


 
  );    
}

export default App;
