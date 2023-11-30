import React, { useState } from 'react';
import { registerUser } from '../services/StudentService';

function Register() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    registerUser(user).then(response => {
      // handle response here
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;