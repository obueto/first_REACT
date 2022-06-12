import React from 'react'
import "./MyApp.css"
import ProfileCard  from './components/ProfileCard'

const MyApp = () => {
  return (

    <div className='myapp-container'>
    <ProfileCard username="kmt" hobby="sleeping" country="UAE" />
    <ProfileCard username="flourish" hobby="drumming" country="South Africa"/>
    
    </div>
    
  )
}

export default MyApp



//<MyButton buttonName="Tolu" color="white" backgroundColor="green"/>
//    <MyButton  buttonName="Lotachi"color="black" backgroundColor="yellow" />
//    <MyButton  buttonName="Adeola" color="white" backgroundColor="blue"/>