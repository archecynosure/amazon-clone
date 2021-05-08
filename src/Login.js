import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = e => {
        e.preventDefault();

        //something in Firebase
    }
    const register = e => {
        e.preventDefault();
    }

    //firebase register
    return (

        <div className="login" >
            < Link to="/" >
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="" />
            </Link>

            <div className="login__container" >
                <h1> Sign - In </h1>

                <form>

                    < h5 > E - mail < /h5>

                 <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                        <h5 > Password < /h5>

                 <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                            <button type="submit" onClick={signIn} className="login__signInButton" > Sign In < /button>

             </form>


                            <p > By signing in, you agree to Amazon Clone's Conditions of Use & Sale.</p>
                            <button onClick={register} className="login__registerButton">Create a new account</button>
        </div>



                        </div>
)
}

export default Login