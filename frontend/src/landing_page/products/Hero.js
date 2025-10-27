import React from "react";
function Hero() {
  return (
    <div className="container  border-bottom mb-5 ">
      <h1 className="text-center fs-4 fw-bolder text-muted mt-5">
        Zerodha Products
      </h1>
      <p className="fs-4 text-center text-muted">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="text-center mb-5">
        Check out our{" "}
        <a className="ps-1" style={{ textDecoration: "none" }}>
          {" "}
          investment offerings →
        </a>
      </p>
    </div>
  );
}

export default Hero;
