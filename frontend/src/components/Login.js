import React, { useState } from 'react';
import { loginUser } from '../services/StudentService';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

const handleSubmit = e => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
        loginUser(credentials).then(() => {
            // handle response here
        });
    } else {
        alert('All fields are required');
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;