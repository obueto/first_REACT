import React, { useState } from 'react'
import Budget from '../../Budget';
import "./budgetLogin.css"

const BudgetLogin = () => {
    const[userName,setUserName] = useState({username:" ", password: " "})

    const[loggedIn, setLoggedIn] = useState(false)
    
   
const handleLoginInput = (e) =>{
    setUserName({...userName,[e.target.name]: e.target.value})
   
}  
const handleLogin = (e) => {
    if(userName.username ==="jay" && userName.password ==="jay25" ){
        setLoggedIn(true)
    } else {console.log ("incorrect details") }

}

  return (<>
   {loggedIn ? <Budget setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>  : 
<div className='budget-login'>
<div className='login'>
   <h1>KMT Budget App!!!</h1>
    <label>username:</label>
    <input onChange={handleLoginInput} name="username"/>
</div>    
<div className='password'>
    <label>password:</label>
    <input onChange={handleLoginInput} name="password" />
</div>
<button className='login-button' onClick={handleLogin}>Login</button>

</div> 


}
  </>    
   

  );
 
}

export default BudgetLogin