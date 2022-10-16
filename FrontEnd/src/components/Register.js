import React,{useState,useEffect} from "react"
import axios from "axios"


function Register() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [cpassword,setcpassword]=useState('')
    const [loading, setloading]=useState(false)
    const [error, seterror]=useState('')
    const [success, setsuccess]=useState('')

   async function register(){
      if(password===cpassword){
        const user={
            name,
            email,
            password,
            cpassword
        }
       try{
       
            const result=await axios.post('/api/users/register',user).data
           

            setname('')
            setemail('')
            setpassword('')
            setcpassword('')
       }catch(error){
           setloading(false)
           seterror(false)
           console.log(error);
       }
      }   
      else{
          alert('Please enter same password')
      }
    }
    return ( 
        <div>
           
            
            <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
            
                    <div className="bs">
                    <h2 >Register</h2>
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="confirm Password" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
                    <br/>
                    <button className="btn btn-primary" onClick={register}>Register</button>
                    </div>

            </div>
            </div>
        </div>
     );
}

export default Register;