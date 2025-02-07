import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function RegisterPage(){

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Registration successfully. Now you can login');

        }
        catch(e){
            alert('Registration unsucessfull');
        }
        

    }
    return(

        <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
    <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto"onSubmit={registerUser} >
            <input type="Text" placeholder="Full Name"
            value={name}
            onChange={ev=>setName(ev.target.value)} />

            <input type="Email" placeholder="Email"
             value={email}
             onChange={ev=>setEmail(ev.target.value)} />

            <input type="Password" placeholder="Password"
             value={password}
             onChange={ev=>setPassword(ev.target.value)} />

            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
                Already a member  <Link className="underline text-black" to={'/login'}>Login</Link>
            </div>
        </form>
        </div>
    </div>
    );
}