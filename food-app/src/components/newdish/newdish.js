import React, { useState } from "react";
import './newdish.css'
import { getDownloadURL, uploadBytes, ref, storage } from '../../routes/fire'


export default function NewDish() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [dishPic, setDishPic] = useState('')
    const [delType, setDelType] = useState('')
    const [category, setCategory] = useState('')

    const addDish = async (a) => {
        try {
            const storageRef = ref(storage, `images/${state.authUser.uid}/${dishPic}`);
            await uploadBytes(storageRef, dishPic);
            let imgURL = await getDownloadURL(ref(storage, `images/${state.authUser.uid}/${dishPic}`));

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id='newdish-main'>
            <div id='newdish-form'>
                <h1>Add New Dish</h1>
                <br />
                <label>Dish Name</label>
                <input type="text" placeholder="Enter Dish Name" required onChange={(a) => { setName(a.target.value) }} value={name} className='fields' />
                <br />
                <label>Price</label>
                <input type="text" placeholder="Enter Dish Price" required onChange={(a) => { setPrice(a.target.value) }} value={price} className='fields' />
                <br />
                <label>Dish Picture</label>
                <input type="file" required style={{ 'border': 'none' }} onChange={(a) => { setDishPic(a.target.value) }} className='fields' />
                <br />
                <label>Delivery Type</label>
                <select id="dropdown" name="del-type" className='fields' onChange={(a) => { setDelType(a.target.value) }}>
                    <option value="" >Select</option>
                    <option value="Free" >Free</option>
                    <option value="Paid">Paid</option>
                </select>
                <br />
                <label>Category</label>
                <select id="dropdown" name="category" className='fields' onChange={(a) => { setCategory(a.target.value) }}>
                    <option value="" >Select</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Desi">Desi</option>
                </select>
                <br />
                <button onClick={() => {
                    let newDish = { name, price, dishPic, delType, category }
                    addDish(newDish)
                }
                }>Add Dish</button>
            </div>
        </div>
    )
}