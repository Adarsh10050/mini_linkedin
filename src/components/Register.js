import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });

      setMessage(res.data.message || 'Registration successful!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Registration failed.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
      }}
    >
      <div
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2
          className="text-2xl font-semibold text-center mb-6"
          style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center', marginBottom: '1.5rem' }}
        >
          Create your Mini LinkedIn account
        </h2>

        {message && (
          <div
            className="text-center text-sm text-red-600 mb-4"
            style={{ color: 'red', textAlign: 'center', marginBottom: '1rem', fontSize: '14px' }}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '0.5rem',
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '0.5rem',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 border rounded-lg"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              borderRadius: '0.5rem',
            }}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            style={{
              width: '100%',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Register
          </button>
        </form>

        <p
          className="text-center mt-4 text-sm"
          style={{ textAlign: 'center', marginTop: '1rem', fontSize: '14px' }}
        >
          Already have an account?{' '}
          <Link
            to="/"
            className="text-blue-600 hover:underline"
            style={{ color: '#2563eb', textDecoration: 'underline' }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
