import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="text-center mb-4"
          style={{ fontSize: "24px", fontWeight: "600" }}
        >
          The Person Behind the Platform
        </h1>
        <div className="col-6 p-5 text-center">
          <img
            className="ms-5 mb-5"
            src="media/images/sujitgiri1.png"
            style={{ width: "40%", borderRadius: "100%" }}
          ></img>
          <p className="fs-4 text-center ms-5">Sujit Giri</p>
          <p className="ms-5">Full Stack Developer</p>
        </div>
        <div className="col-6 mt-5 ">
          <p className="me-5 mt-4">
            Sujit is a passionate Full Stack Developer and the creator of
            Zerodha. With a strong background in web technologies and a deep
            interest in finance, he built Zerodha to simplify trading and
            investing through intuitive design and powerful tools.
          </p>

          <p className="me-5">
            Driven by curiosity and a problem-solving mindset, he enjoys turning
            complex ideas into smooth, user-friendly experiences. His goal is to
            make technology more accessible and impactful for everyday users.
          </p>
          <p className="me-5">
            When Sujit not coding or working on new projects, Sujit loves
            playing cricket, or listening to music which helps him stay creative
            and balanced.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
