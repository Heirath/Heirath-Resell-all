import React from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const onclickHandle = () =>{
navigate ('/signin')
  }
  return (
    <div className='login-page'>
        <div className="login-main">
            <div className="logo">
              <Link to={'/'}>
                <h1>Heirath <span>.</span></h1> </Link>
                <form action="
                ">
                    <label htmlFor=""> Username</label>
                    <input type="text"    placeholder='username or Email'/>
                    <div className="line"></div>
                    
                    <label htmlFor=""> Password</label>
                    <input type="text" placeholder='password'/>
                    <div className="line"></div>
<button>Login</button>
<p>Forget Password ?</p>
<p className='or'>or</p>
<p>Don't havd an account ?</p>
<button onClick={onclickHandle}>Sign In</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login