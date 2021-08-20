import './App.css';
import React,{useEffect,useState} from 'react'
import Userauth from './components/Userauth';
import {auth} from './components/Firebase';
import Homepage from './components/Homepage';

const  App=()=>{
  const [presentuser, setpresentuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user){
      setpresentuser({
        uid:user?.uid,
        email:user?.email,
      })
      }
      else{
        setpresentuser(null);
      }
    })
  },[])
  return (
    <div className="App">
      {presentuser ? <Homepage/> : <Userauth/>}
     
    </div>
  );
}

export default App;
