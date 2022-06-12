import React, { useState } from 'react'
import './Budget.css'
import BudgetBalance from './components/budget/BudgetBalance'
import BudgetBody from './components/budget/BudgetBody'
import BudgetLogin from './components/budget/BudgetLogin'


 const Budget = () => {
     const[balance,setBalance] = useState(5000000)
  

  return (
    <div className='budget-container'>  
        <BudgetBalance balance={balance} setBalance={setBalance}/>
        <BudgetBody balance={balance} setBalance={setBalance} />
    
        
    </div>
  )
}


export default Budget