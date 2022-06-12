import React,{useState} from 'react'
import Register from './Register'
import {useHistory} from "react-router-dom"


const Login = ({setAlert}) => {
    let history = useHistory();
    const[userDetails,setUserDetails] = useState({identity: "",   password: ""})

   const handleUserInput = (e) => {
    setUserDetails({...userDetails,[e.target.name]: e.target.value})

   }

   const handleLogin = () => {
       let usersRepository = JSON.parse(localStorage.getItem("users"))
    
    let isValid = usersRepository.some((userObject) => {
    let idCheck = (userObject?.email === userDetails.identity ||
         userObject?.username === userDetails?.identity) 
        let passwordCheck = (userObject.password === userDetails.password)
    return idCheck && passwordCheck
})
 
isValid ?
history.push("/dashboard"):
       
       setAlert({ishow: true, status: "error", message: "user Details Incorrect"})

       setTimeout(
           () => setAlert ({ishow : false, status: "", message: ""}),
           5000)   


}


  return (
     <div className='auth-register'>
        <label> Email or Username</label>
        <input name="identity" onChange={handleUserInput}/>
        <label>Password</label>
        <input type="password" name="password" onChange={handleUserInput}/>
        <button onClick={handleLogin}> Login</button>
    </div>
  )
}

export default Login
