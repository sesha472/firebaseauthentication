import React,{useState} from 'react';
import { auth } from './Firebase';

const Userauth = () => {
    const [data, setdata] = useState({
        email:"",
        password:"",
    })

    const {email,password}=data;
     
    const InputHandler=e=>{
        setdata({...data,[e.target.name]: e.target.value})
    }

    const signuphandler=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(user=>console.log(user))
        .catch(err=>console.log(err))

    }
    const signinhandler=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(user=>console.log(user))
        .catch(err=>console.log(err))
       
       
    }
 
    return (
        <div>
            <center>
                <form  style={{margin:"200px"}}>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={InputHandler} /> <br></br><br/>
                    <input type="password" name="password" placeholder="password" value={password} onChange={InputHandler}/><br/><br></br>
                    <input onClick={signinhandler} type="button" value="sign In" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input onClick={signuphandler} type="button" value="sign Up" /><br/>
                  
                </form>
            </center>
            
        </div>
    )
}

export default Userauth
