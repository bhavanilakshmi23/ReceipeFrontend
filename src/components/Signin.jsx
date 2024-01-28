import React from 'react'
import { FormGroup, Form, Button, Input, Label } from "reactstrap"
import axios from 'axios'
import {API} from './global'
import {toast} from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'


const Signin = () => {
let navigate = useNavigate()
    let handleSignin = async(e)=>{
        e.preventDefault()

        let data = {
            email:e.target.email.value,
            password:e.target.password.value
        }
        
        try {
            let res = await axios.post(`${API}/user/signin`,data)
            if(res.status===200)
            {
                toast.success(res.data.message)
                sessionStorage.setItem('token',res.data.token)
                navigate('/home')
            }
        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
        }
    }

  
  return (
    <div className='signin'>
      
      <Form onSubmit={handleSignin} className="form">
        <h1>SignIn</h1>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      type="password"
    />
  </FormGroup>
  
  <Button className='button'>
    Signin
  </Button>
  <span><Link to='/signup'>Create New Account</Link></span>
</Form>

    </div>
  )
}

export default Signin
