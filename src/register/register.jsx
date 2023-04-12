import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor='name'>Full name</label>
                <input value={name} onChange={(e) => setPass(e.target.value)} type="name" name="name" id="name" placeholder="name" />
           
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" />
            
                <label htmlFor='password'>password</label>
                <input value={pass} onChange={(e) => setName(e.target.value)} type="password" name="password" id="password" placeholder="password" />
                
                <button type="submit">Register</button>
                 </form>
                 <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
        
        </div>
    )
}