import React from 'react'
import {FormGroup,Form,Button,Input,Label} from "reactstrap"
import axios from 'axios'
import {API} from './global'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'


const Signup = () => {

let navigate = useNavigate()
    let handleSignup = async(e)=>{
        e.preventDefault()

        let data = {
            name:e.target.name.value,
            email:e.target.email.value,
            mobile:e.target.mobile.value,
            password:e.target.password.value
        }
        
        try {
            let res = await axios.post(`${API}/user/signup`,data)
            if(res.status===200)
            {
                toast.success(res.data.message)
                navigate('/')
            }
        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
        }
    }






  return (
    <div className='signup'>
      
      <Form onSubmit={handleSignup} className="form">
        <h1>signup</h1>
    <FormGroup>
    <Label for="exampleName">
      Name
    </Label>
    <Input
      id="exampleName"
      name="name"
      type="name"
                  />
                   </FormGroup>
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
                <FormGroup>
    <Label for="exampleMobile">
      Mobile
    </Label>
    <Input
      id="exampleMobile"
      name="mobile"
      type="mobile"
    />
  </FormGroup>
  
  <Button>
    Signup
  </Button>
</Form>

    </div>
  )
}

export default Signup
