import React from "react";
function Hero() {
  return (
    <div className="container mt-4 p-4">
      <div className="row p-5 mb-5">
        <h1
          className="text-center mt-5"
          style={{ fontSize: "24px", fontWeight: 600 }}
        >
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.{" "}
        </h1>
      </div>
      <div className="row p-5 border-top ">
        <div className="col-6 mt-5">
          <p className="ms-5" style={{ fontSize: "16px", lineHeight:"28.5px" }}>
            We kick-started operations on the 15th of August, 2010 <br />
            with the goal of b reaking all barriers that traders and
            <br />
            investors face in India in terms of cost, support, and
            <br />
            technology. We named the company Zerodha, a<br /> combination of
            Zero and "Rodha", the Sanskrit word for <br /> barrier.
          </p>

          <p className="ms-5" style={{ fontSize: "16px", lineHeight:"28.5px" }}>
            Today, our disruptive pricing models and in-house <br /> technology
            have made us the biggest stock broker in <br /> India.{" "}
          </p>

          <p className="ms-5" style={{ fontSize: "16px", lineHeight:"28.5px" }}>
            Over 1.6+ crore clients place billions of orders every year <br />{" "}
            through our powerful ecosystem of investment <br />
            platforms, contributing over 15% of all Indian retail <br /> trading
            volumes.{" "}
          </p>
        </div>
        <div className="col-6 mt-5" >
          <p style={{ fontSize: "16px", lineHeight:"28.5px" }}>
            In addition, we run a number of popular open online <br />
            educational and community initiatives to empower retail <br />
            traders and investors.{" "}
          </p>

          <p style={{ fontSize: "16px" ,lineHeight:"28.5px" }}>
            Rainmatter, our fintech fund and incubator, has invested <br />
            in several fintech startups with the goal of growing the <br />{" "}
            Indian capital markets.
          </p>

          <p style={{ fontSize: "16px", lineHeight:"28.5px"}}>
            And yet, we are always up to something new every day.
            <br /> Catch up on the latest updates on our blog or see what
            <br /> the media is saying about us or learn more about our
            <br /> business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
