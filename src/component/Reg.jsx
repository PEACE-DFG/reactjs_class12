import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Reg() {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    Name:'',
    Email:'',
    Password:'',
    RepeatPassword:''
  })

  const [errors,setErrors]=useState({});
  const submitData =(e)=>{
    e.preventDefault();

    const newErrors={ };
    if(user.Name.trim()===""){
      newErrors.NameErr = 'Your Name is required'
    }
    if(user.Email.trim()===""){
      newErrors.EmailErr = 'Your Email is required'
    }
    if(user.Password.trim()===""){
      newErrors.PasswordErr = 'Your Password is required'
    }else if(user.Password.trim().length < 8){
      newErrors.PasswordErr = 'Your Password should not be less than 8 characters'
    }
    if(user.RepeatPassword.trim()===""){
      newErrors.RepeatPasswordErr = 'Your Password is required'
    }else if(user.Password.trim()!== user.RepeatPassword.trim()){
      newErrors.RepeatPasswordErr = 'Your Password does not match'
    }



    setErrors(newErrors)

    if(Object.keys(newErrors).length===0){
      const users=JSON.parse(localStorage.getItem('users'))||[];
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/Login')
    }
  }


  return (
    <div>
      <form action=""  className='rew'  onSubmit={submitData} >
 <div className='rod mt-5' style={{maxWidth:'400px',margin:'auto'}}>
     <div className='roo text-center'>
     <h1 className='text-center text-dark'>
         Register  
     </h1>
     </div>
            <div class="form-floating my-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Name"
        onChange={(e)=>{
          setUser({...user, Name:e.target.value})
        }}
            />
            <label for="floatingInput" name="Name">Name</label>
            {errors.NameErr && <span style={{ color:'red' }}>{errors.NameErr}</span>}

            </div>
            <div class="form-floating my-3">
                 <input type="email" class="form-control" id="floatingPassword" placeholder="Email"
                onChange={(e)=>{
                  setUser({...user, Email:e.target.value})
                }}
                />
                  
                  <label for="floatingPassword" name='Email'>Email</label>
                  {errors.EmailErr && <span style={{ color:'red' }}>{errors.EmailErr}</span>}

                  </div>
             <div class="form-floating">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
              onChange={(e)=>{
                setUser({...user, Password:e.target.value})
              }}
                />
                  
                  <label for="floatingPassword" name='Password'>Password</label>
                  {errors.PasswordErr && <span style={{ color:'red' }}>{errors.PasswordErr}</span>}

                  </div>
                  <div class="form-floating mt-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
               onChange={(e)=>{
                setUser({...user, RepeatPassword:e.target.value})
              }}
                  />
                  <label for="floatingPassword" name='RepeatPassword'>RepeatPassword</label>
                  {errors.RepeatPasswordErr && <span style={{ color:'red' }}>{errors.RepeatPasswordErr}</span>}

                  </div> 
 <div class="col-12 text-center">
     <button class="btn btn-success my-3"  type="submit">Register</button>
   </div>
 </div>
 </form>
    </div>
  )
}

export default Reg