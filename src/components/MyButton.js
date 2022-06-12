import React from 'react'

const MyButton = (props) => {
  return (
    <button style={{backgroundColor : props.backgroundColor, color : props.colorkjiu}}>{props.buttonName}</button>
  )
}
export default MyButton