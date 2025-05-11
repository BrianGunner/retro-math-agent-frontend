import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-black text-terminal font-mono p-4">
      <div className="max-w-2xl mx-auto border border-terminal p-6">
        <h1 className="text-2xl mb-4">[ DASHBOARD ]</h1>
        <p>Welcome to your math agent dashboard!</p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-terminal text-black py-2 px-4 font-bold hover:opacity-80"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
