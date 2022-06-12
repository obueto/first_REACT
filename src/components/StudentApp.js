import React, { useState } from 'react'

const StudentApp = () => {
const [input, setInput] = useState()


const handleChange = (e) => {
    // e.preventDefault();
    setInput(e.target.value)
}


  return (
  <>
  {/* console.log ("hi") */}
  <form>
  <input name='name' placeholder='name' onChange={handleChange}></input>
  <input name='email' placeholder='email' onChange={handleChange}></input>
  </form>
  <button >Add</button>


  </>
    
  )
}
export default StudentApp