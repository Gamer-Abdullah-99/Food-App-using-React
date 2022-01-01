import React, { useState, useContext } from "react";
import './login.css'
import { } from '../../routes/fire';
import { GlobalContext } from '../../context/context'
import { auth, signInWithEmailAndPassword, doc, getDoc, db } from "../../routes/fire";

export default function Login() {

    const { state, dispatch } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(false)

    const errorhandling = () => {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 2000)
    }

    const login = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            const userUid = res.user.uid
            console.log(userUid)
            const docRef = doc(db, "Users", userUid);
            const docSnap = await getDoc(docRef);
            const userRes = docSnap.data()
            console.log(userRes)
            dispatch({ type: "LOGIN_USER", payload: userRes });
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div id="login-main">
            <div id='login-parent'>
                <div id="login-pic">
                </div>
                <div id='login-form'>
                    <h1>Login</h1>
                    <br />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email Address" required onChange={(a) => { setEmail(a.target.value) }} value={email} className='fields' />
                    <br />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" required onChange={(a) => { setPassword(a.target.value) }} value={password} className='fields' />
                    <br />
                    <button onClick={() => {
                        if (!email || !password) {
                            errorhandling();
                        } else {
                            login();
                        }
                    }
                    }>Register</button>
                    <p>Already registered ? <a href='/login'>Login</a> here</p>
                </div>
            </div>
            {error ?
                <>
                    <div id='login-popup'>
                        <div>
                            <h1 style={{ "fontSize": "50px" }}>Error !</h1>
                            <br />
                            <h3>Fill all the fields !</h3>
                        </div>
                    </div>
                </> : null
            }
        </div >
    )
}
