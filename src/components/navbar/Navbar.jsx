import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");   // ✅ Token delete
    navigate("/login");                 // ✅ Redirect
  };

  return (
    <nav style={{ padding: "15px", background: "#3f51b5", color: "#fff" }}>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
