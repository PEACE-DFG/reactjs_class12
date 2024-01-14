import React from 'react'
import Index from '../component/Index'

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
      <Index {...user}/>
    </div>
  )
}

export default Home