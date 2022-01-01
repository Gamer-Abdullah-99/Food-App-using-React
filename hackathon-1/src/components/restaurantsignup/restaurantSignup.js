import React, { useState } from "react";
import './restaurantSignup.css'
import { createUserWithEmailAndPassword, auth, doc, setDoc, db } from '../../routes/fire';


export default function RestaurantSignUp() {

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
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
            const res2 = await setDoc(doc(db, "Users", userUid), a);
            // history.push("/login");
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="" id="res-signup-main">
            <div id='res-signup-parent'>
                <div id='res-signup-form' className=''>
                    <h1>Restaurant Registration</h1>
                    <br />
                    <label>Restaurant Name</label>
                    <input type="text" placeholder="Enter Restaurant Name" required onChange={(a) => { setName(a.target.value) }} value={name} className='fields' />
                    <br />
                    <label>Country</label>
                    <input type="text" placeholder="Enter Country" required onChange={(a) => { setCountry(a.target.value) }} value={country} className='fields' />
                    <br />
                    <label>City</label>
                    <input type="text" placeholder="Enter City" required onChange={(a) => { setCity(a.target.value) }} value={city} className='fields' />
                    <br />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email Address" required onChange={(a) => { setEmail(a.target.value) }} value={email} className='fields' />
                    <br />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" required onChange={(a) => { setPassword(a.target.value) }} value={password} className='fields' />
                    <br />
                    <button onClick={() => {
                        if (!name || !country || !city || !email || !password) {
                            errorhandling();
                        } else {
                            let user = { name, country, city, email, password }
                            register(user)
                        }
                    }
                    }>Register</button>
                    <p>Already registered ? <a href='/login'>Login</a> here</p>
                </div>
                <div id="res-signup-pic">
                </div>
            </div>
            {error ?
                <>
                    <div id='res-signup-popup'>
                        <h1 style={{ "fontSize": "50px" }}>Error !</h1>
                        <br />
                        <h3>Fill all the fields !</h3>
                    </div>
                </> : null
            }
        </div >
    )

}