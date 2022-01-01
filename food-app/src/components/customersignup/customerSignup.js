import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import './customerSignup.css'
import { createUserWithEmailAndPassword, auth, doc, setDoc, db } from '../../routes/fire';


export default function CustomerSignup() {

    let history = useHistory();

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    const errorhandling = () => {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 2000)
    }

    const register = async (a) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const userUid = res.user.uid
            a.uid = userUid
            a.role = 'customer';
            await setDoc(doc(db, "Users", userUid), a);
            history.push("/login");
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div id="cus-signup-main">
            <div id='cus-signup-parent'>
                <div id="cus-signup-pic">
                </div>
                <div id='cus-signup-form'>
                    <h1>Customer Registration</h1>
                    <br />
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter Your Name" required onChange={(a) => { setName(a.target.value) }} value={name} className='fields' />
                    <br />
                    <label>Country</label>
                    <input type="text" placeholder="Enter Country" required onChange={(a) => { setCountry(a.target.value) }} value={country} className='fields' />
                    <br />
                    <label>City</label>
                    <input type="text" placeholder="Enter City" required onChange={(a) => { setCity(a.target.value) }} value={city} className='fields' />
                    <br />
                    <label>Phone Number</label>
                    <input type="text" placeholder="Enter Phone Number" maxLength='11' required onChange={(a) => { setPhone(a.target.value) }} value={phone} className='fields' />
                    <br />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email Address" required onChange={(a) => { setEmail(a.target.value) }} value={email} className='fields' />
                    <br />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" required onChange={(a) => { setPassword(a.target.value) }} value={password} className='fields' />
                    <br />
                    <button onClick={() => {
                        if (!name || !country || !city || !phone || !email || !password) {
                            errorhandling();
                        } else {
                            let user = { name, country, city, phone, email, password }
                            register(user)
                        }
                    }
                    }>Register</button>
                    <p>Already registered ? <a href='/login'>Login</a> here</p>
                </div>
            </div>
            {error ?
                <>
                    <div id='cus-signup-popup'>
                        <h1 style={{ "fontSize": "50px" }}>Error !</h1>
                        <br />
                        <h3>Fill all the fields !</h3>
                    </div>
                </> : null
            }
        </div >
    )
}