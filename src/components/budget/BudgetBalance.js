import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./BudgetBalance.css"
// import BudgetEntry from './BudgetEntry'

const BudgetBalance = (props) => {
  const[input, setInput] = useState("")
  const[exchangerate, setExchangeRate] = useState({})
  const[selectOption,setSelectOption] = useState("")

const handleLogOut = (e) => {
  props.setLoggedIn(false)
}

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSelect = (e) => {
    e.target.value === Object.keys(exchangerate)[0] ? 
     props.setBalance(1000 * exchangerate[e.target.value]) :
     (selectOption === "") ?
     props.setBalance(props.balance * exchangerate[e.target.value]) :
     props.setBalance(props.balance / exchangerate[selectOption] * exchangerate[e.target.value])
 
      setSelectOption(e.target.value)
    }


    useEffect(()  => {
      axios.get('https://v6.exchangerate-api.com/v6/8f0a0c601cdd7ef937bc60af/latest/NGN')
      .then(
        (response)=>{
          setExchangeRate(response.data.conversion_rates)
          setSelectOption(Object.keys(response.data.conversion_rates)[0])

        } 
      )
  
    }, [])
    
      
useEffect(()  => {
  console.log("i just mounted @ budget balance")
  return () => {
    console.log("i just Unmounted @ budget balance")
  }
}, [props.balance])

  return (<>
      
        <div className="budgetBalance">
            <div className='balance'>
              { props.balance}
            </div>
            <select className='budget-dropdown' onChange={handleSelect}>
              {Object.keys(exchangerate).length > 0 &&
                Object.keys(exchangerate).map(
                  (data,index)=> <option key={index}>{data}</option>
                 )}
            </select>


        <div className="balance-button">
            <input type="number" onChange={handleInput}/>
        <button onClick={() => props.setBalance(input)}>Update Balance</button>
        <button className='logout' onClick={handleLogOut} > LogOut</button>
        </div>       
         </div>
   
        </>  
  )
}


export default  BudgetBalance


/* <div className='trying-something'>
            <form> onchange={ () => props.balance}</form> 
            
        </div> */