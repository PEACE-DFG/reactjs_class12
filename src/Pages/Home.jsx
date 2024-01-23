import React from 'react'
import Index from '../component/Index'
import {Routes,Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'

function Home() {

  const user={
    name: 'John',
    age: 36,
    Phone_Number:'48739567386473',
    job:'Web developer'
  }
  return (
    <div>
      {/* <Index name={user.name} age={user.age}/> */}
      <Routes>
      <Route path='/Home' element={<Index {...user}/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default Home