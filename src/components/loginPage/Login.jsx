// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// const Login = () => {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   const handleLogin = () => {
//   const user = {
//     email,
//     password
//   };

//   fetch("http://localhost:5000/api/admin/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Response:", data);

//       if (data.status === true) {
//         alert("✅ Login successful!");
//         localStorage.setItem("admin", JSON.stringify(data));
//         navigate("/dashboard");   // ✅ correct redirect
//       } else {
//         alert("❌ " + data.message);
//       }
//     })
//     .catch((err) => {
//       console.log("Error:", err);
//       alert("Server failed");
//     });
// };



//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>

//         <form>
//           {!isLogin && (
//             <input type="text" placeholder="Full Name" className="input-box" />
//           )}

//           <input type="email" placeholder="Email" className="input-box" />
//           <input type="password" placeholder="Password" className="input-box" />

//           <button className="auth-btn">
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="switch-text">
//           {isLogin ? (
//             <>
//               Don't have an account?{" "}
//               <span onClick={() => setIsLogin(false)} className="switch-link">
//                 Sign Up
//               </span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span onClick={() => setIsLogin(true)} className="switch-link">
//                 Login
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
