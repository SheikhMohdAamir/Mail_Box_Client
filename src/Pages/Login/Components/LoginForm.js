import { Form, Button } from "react-bootstrap"
import { useRef } from "react"
import axios from "axios";

const LoginForm = () => {

    const refEmail = useRef('');
    const refPassword = useRef('');
    const refConfirmPassword = useRef('');

    const submitHandler = async(e) => {
        e.preventDefault()

        const email = refEmail.current.value
        const password = refPassword.current.value
        const confirmPassword = refConfirmPassword.current.value

        if(password!==confirmPassword){
            alert('Password Field Did Not Match!')
            return
        }
        else{
            try{
                await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCbtGtwwncxyabxbdQdrz-lsfcdP0IKWV8', {email:email, password:password, returnSecureToken: true})
                alert('Signed In Successfully')
            }
            catch(error){
                alert('Authentication Failed')
            }

            refEmail.current.value = ''
            refPassword.current.value = ''
            refConfirmPassword.current.value = ''
        }

       
        

    }
  return (
    (<>
        <h3 style={{textAlign:"center", marginTop:'40px'}} >SignUp</h3>

        <Form onSubmit={submitHandler}  style={{padding:'100px 500px'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={refEmail} required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={refPassword} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordd" >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" ref={refConfirmPassword} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>

        </>
      )
  )
}

export default LoginForm
