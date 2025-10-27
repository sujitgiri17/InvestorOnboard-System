import React from "react";

function Welcome() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg p-5 border-0"
        style={{
          maxWidth: "1100px", // Increased width
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-bold display-6">Your Zerodha account is active 🎉</h2>
            <p className="mt-3 fs-5">
              To get started, log in to Zerodha Kite using your User ID and password.
              You can refer to your registered email for more details.
            </p>
            <p className="fs-5">Welcome aboard, and happy investing!</p>

            <button
              className="btn btn-primary px-4 py-2 mt-3 fs-5"
              style={{ borderRadius: "8px" }}
            >
              Login to Kite
            </button>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center">
            <img
              src="media/images/person.svg"
              alt="Welcome Illustration"
              className="img-fluid"
              style={{ maxHeight: "350px" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Welcome;
