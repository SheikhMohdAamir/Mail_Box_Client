import { Form, Button } from "react-bootstrap"
import { useRef } from "react"
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../ReduxStore/Slices/LoginSlice";

const LoginForm = () => {
    const [login, setLogin] = useState(false)

    const dispatch = useDispatch()

    const refEmail = useRef('');
    const refPassword = useRef('');
    const refConfirmPassword = useRef('');

    const switchHandler = () => {
        setLogin(!login)
    }

    const submitHandler = async(e) => {
        e.preventDefault()

        const email = refEmail.current.value
        const password = refPassword.current.value

        if(!login){
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
        else{
            try{
                const resolve = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCbtGtwwncxyabxbdQdrz-lsfcdP0IKWV8', {email:email, password:password, returnSecureToken: true})
                const idToken = resolve.data.idToken
                dispatch(loginAction.login(idToken))
            }
            catch(error){
                alert('Wrong Credentials')
            }
            refEmail.current.value = ''
            refPassword.current.value = ''
        }

       
        

    }
  return (
    (<div style={{padding:'100px 500px'}}>
        <h3 style={{textAlign:"center"}} >{!login? 'SignUp' : 'Login'}</h3>
        <br />
                                 {/* SignUp */}

        {!login && <Form onSubmit={submitHandler}  >
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
        </Form>}
                                    {/* Login */}

        {login && <Form onSubmit={submitHandler}  >
          <Form.Group className="mb-3" controlId="formBasicEmailL">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={refEmail} required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPasswordL">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={refPassword} required/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>}
        <br />
        <Button variant="secondary" onClick={switchHandler}>{!login? 'Already Have An Account! Login' : " Don't Have An Account! SignUp"}</Button>{' '}

        </div>
      )
  )
}

export default LoginForm
