import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useSearchParams,
  useNavigate
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function EmailConfirmHandler() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.get("type") === "signup") {
      alert("✅ Your email is confirmed! Please log in.");
      navigate("/login");
    }
  }, [params, navigate]);

  return null;
}

function App() {
  return (
    <>
      {/* Handle the email-confirm redirect */}
      <EmailConfirmHandler />

      {/* Top navigation */}
      <nav className="bg-retrogray p-2 text-black font-mono flex space-x-4">
        <Link to="/signup" className="hover:underline">
          Signup
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
      </nav>

      {/* App routes */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
