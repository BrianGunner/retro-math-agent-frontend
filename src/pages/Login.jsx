import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password,
      });
      setMessage('Login successful! JWT saved.');
      localStorage.setItem('access_token', response.data.access_token);
    } catch (err) {
      setMessage(err.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-black text-terminal font-mono flex flex-col items-center justify-center p-4">
      <div className="border border-terminal p-6 w-full max-w-md">
        <h2 className="text-xl mb-4">[ LOGIN ]</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            className="bg-black border border-terminal text-terminal p-2"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="bg-black border border-terminal text-terminal p-2"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-terminal text-black font-bold py-2 hover:opacity-80"
            type="submit"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
