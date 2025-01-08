import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card';
import UseRefComponent from './Components/useRefComponent';


function App() {
  const titleArray = ["Frontend Developer","Backend Developer","Full Stack Developer",];

  const descArray = ["Builds the client side of the application using HTML, CSS and JavaScript","Builds the server side of the application using Node.js, Python, Ruby, etc.", "Builds both client and server sides of the application", "Analyzes and interprets complex data to help in decision making", "Designs user interfaces and user experiences", "Manages and automates the deployment process"];

  const img = "https://images.unsplash.com/photo-1615868167768-6fe2e8eaacd8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkJTIwYm95fGVufDB8fDB8fHww";
  return (
    <div className=''>
      <h1 className='bg-red-600 font-bold text-green-600 p-5 text-3xl'>Lokesh Singh</h1>

      <div className="flex justify-center md:flex-row flex-col align-middle">
      {
       titleArray.map((element,index)=>{
        return <Card img = {img} title={element} desc = {descArray[index]} key={index} />
       })
      }
      </div>

      <UseRefComponent />
      
    </div>
    
  )
}

export default App
