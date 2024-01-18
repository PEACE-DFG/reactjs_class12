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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
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