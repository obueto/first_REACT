import React, { useState } from 'react'
import Login from './Login'

const Register = ({setAlert}) => {
    const[userDetails, setUserDetails] = useState({username: "", email: "",password: ""})

    const handleUserInput = (e) => {
        setUserDetails({...userDetails,[e.target.name]: e.target.value})
    }

    const handleRegisteration = () => {
        let {username,email} = userDetails
        let isfieldsIncomplete = Object.keys(userDetails).some((detail) => detail === " ")
        if(isfieldsIncomplete){
            setAlert({ishow: true, status: "error" , message: "field Incomplete"})
            return
        }
     // validate email is email
        var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        let isEmailCorrect = email.match(validRegex)
        if(!isEmailCorrect){
            setAlert({ishow: true, status: "error" , message: "email incorrect"})
            return
        }
     //validate username doesnot exist
   
        try {
            let usersRepository
            usersRepository = JSON.parse(localStorage.getItem("users"))
            let isUserExist = usersRepository.some((user) => user.username === username)
            if(isUserExist) {
                setAlert({ishow: true, status: "error" , message: "username already exists"})
                setAlert(<Login/>)
    
                return
            
            }  
            let newUserRepository = [userDetails, ...usersRepository]
            localStorage.setItem("users",JSON.stringify(newUserRepository))
            setAlert({ishow: true, status: "success" , message: "Registration successful"})

        } catch(error){
            localStorage.setItem("users",JSON.stringify([userDetails]) )

            setAlert({ishow: true, status: "success" , message: "Registration successful"})

            
        }
      
    }

  return (
    <div className='auth-register'>
        <label>Username</label>
        <input name="username" onChange={handleUserInput}/>
        <label>Email</label>
        <input name="email" onChange={handleUserInput}/>
        <label>Password</label>
        <input type="password" name="password" onChange={handleUserInput}/>
        <button onClick={handleRegisteration}> Register</button>
    </div>
  )                     
}

export default Register