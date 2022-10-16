import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios"
var async = require("async")

const userN = JSON.parse(localStorage.getItem('currentUser'))

const SignUp = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [confirmpassword,setconfirmpassword]=useState('')
  
  async function register(){
    if(password==confirmpassword){
      const user={
        name,
        email,
        password
       
      }
      try{
        const result=await (await axios.post('/api/users/register',user)).data
        document.location.reload();
        console.log('success')
      }catch(err){
        console.log(err);
      }
    }
  }

  
    async function login(){
     
      const user={
        email,
        password
      }
      console.log(user)
      try{
        const result=await (await axios.post('/api/users/login',user)).data
        localStorage.setItem('currentUser',JSON.stringify(result));
        console.log(userN.name)
      }catch(err){
        console.log(err)
      }
    window.location.href='/'
    }


  const reg = (
    <form className="register-form" autoComplete={"off"}>
      <div className="gridy">
      <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
      <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
      <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
      <input type="password" className="form-control" placeholder="confirm Password" value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}}/>
      <br/>
        <button className="register-btn" onClick={(e) => e.preventDefault()}>
         <button onClick={register} className="register-btn">Click here</button> 
        </button>
      </div>
    </form>
  );
  const log = (
    <form className="log-form" autoComplete={"off"}>
      <div className="gridy">
      <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
      <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
     
        <button className="register-btn" onClick={(e) => e.preventDefault()}>
       <button onClick={login} className='register-btn'>   Login</button>
        </button>
      </div>
    </form>
  );
  return (
    <main>
      <Navbar />

      <div className="register-content">
        <button className="sign-toggle-box">
          <span
            className={`sign-toggle sign-toggle-${hasAccount}`}
            onClick={() => setHasAccount(!hasAccount)}
          ></span>
        </button>
         {hasAccount ? log : reg}
      </div>
      <Footer />
    </main>
  );
};

export default SignUp;
