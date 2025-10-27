import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="fs-4 fw-6 mt-5">The Zerodha Universe</h1>
        <p className="fs-6 mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 ">
          <img
            style={{ width: "50%" }}
            src="media/images/zerodhaFundhouse.png"
          ></img>
          <p
            className="text-small text-muted  fs-6"
            style={{ marginTop: "34px" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            className="mt-2"
            style={{ width: "50%" }}
            src="media/images/sensibullLogo.svg"
          ></img>
          <p className="text-small text-muted mt-5 fs-6">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{ width: "45%" }} src="media/images/tijori.svg"></img>
          <p className="text-small text-muted mt-4 fs-6">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>



        <div className="col-4 p-3 mt-5 ">
          <img
            style={{ width: "50%" }}
            src="media/images/streakLogo.png"
          ></img>
          <p
            className="text-small text-muted  fs-6" 
            style={{ marginTop: "34px" }}
          >
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            className="mt-2"
            style={{ width: "50%" }}
            src="media/images/smallcaseLogo.png"
          ></img>
          <p className="text-small text-muted fs-6" style={{ marginTop: "34px" }}>
            Thematic investing platform  <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "45%" }} src="media/images/dittoLogo.png"></img>
          <p className="text-small text-muted fs-6" style={{ marginTop: "34px" }}>
          Personalized advice on life  <br />
          and health insurance. No spam <br />
          and health insurance. No spam 
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%" , margin: "0 auto"}}>Sign up for free </button>
      </div>
    </div>
  );
}

export default Universe;
