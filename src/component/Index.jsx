import React from 'react'
import './index.css';
import {useState} from "react";

// import design from './styles.module.css'
function Index(props) {
// your js goes here
//  const styles={ 
//   color:'blue',
//   textAlign:'center',
//   border:'2px solid red',
//   backgroundColor:'grey'
//  }

const [count,setCount] =useState(0);

const increment =()=>{
  setCount(count + 1)
}


const decrement =()=>{
  setCount(count - 1)
}


  return (
    <div>
  
      <h1 >WELCOME TO REACT JS CLASS</h1>
      <div className='box'>

      </div>
      {/* <div className={design.cent}>
      <h1>Name:{props.name}</h1>
      <h1>Age:{props.age}</h1>
      <h1>Phone Number:{props.Phone_Number}</h1>
      <h1>Job:{props.job}</h1>

      </div> */}

      <div style={{ textAlign:'center' }}>
        <button onClick={increment}>Increment</button>
        <h2>Count: {count}</h2>
      <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Index