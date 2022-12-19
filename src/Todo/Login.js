import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form , FormGroup , Label , Input , Button, Alert}  from 'reactstrap';


const Login = () => {
  const [user, setuser] = useState({username:'', password:''})
  const [success , setSuccess]=useState(true)

  const clickHandler = (e)=> {
    console.log("Submit button clicked")
    console.log('name of user '+user.username+'password is '+user.password)
    if(user.username==='nikhil' && user.password==='123'){

      console.log('login valid')

      setSuccess(true)
      //navigate("/Welcome")

  }

  else{

      console.log('login invalid')  

      setSuccess(false)
      

  }
  }

  const changeHandler = (e)=>{
    setuser({...user,[e.target.name]: e.target.value})
  }

  return (

    <div className='container mx-2 my-3  'style={{width:'50%' , justifyContent:'center'}} >
        <Form>
        {success && <Alert color="success">Login successful</Alert>}

        {!success && <Alert color="danger">Login failure</Alert>}


  <FormGroup>

    <Label for="exampleUsername">
      Email
    </Label>

    <Input
      id="exampleUsername"
      name="username"
      placeholder="with a placeholder"
      type="text"
      value={user.username}
      onChange={changeHandler}
    />

  </FormGroup>

  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input

      id="examplePassword"

      name="password"

      placeholder="password placeholder"

      type="password"
      value={user.password}
      onChange={changeHandler}

    />

  </FormGroup>

  <Button  color="danger" onClick={(e)=>{clickHandler(e)}}>
    Submit
  </Button>
  </Form>
    </div>
  )

}

export default Login