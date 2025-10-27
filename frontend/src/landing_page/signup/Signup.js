import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For redirect

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/signup",
        { username, email, password },
        { withCredentials: true }
      );

      setMessage(res.data.message);

      if (res.data.success) {
        // Redirect to welcome page
        navigate("/welcome");
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      
      {/* ✅ Top Title Section – Centered */}
      <div className="text-center mb-5">
        <h1>Open a free demat and trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      {/* ✅ Left-Right Layout Below the Title */}
      <div className="row d-flex align-items-center">
        {/* Left Side Image */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/accountOpen.svg" // Change this to your actual image URL
            alt="Signup Illustration"
            className="img-fluid"
          />
        </div>

        {/* Right Side Signup Form */}
        <div className="col-md-6">
          <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2 className="mb-3">Signup</h2>
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Signup"}
              </button>
            </form>
            {message && <p className="mt-3">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
