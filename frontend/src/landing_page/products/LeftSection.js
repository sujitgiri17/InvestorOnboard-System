import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 p-3 mt-4 p-5">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 mt-5 p-5">
          <h1 className="mt-5 ms-5">{productName}</h1>
          <p className="ms-5">{productDescription}</p>
          <div>
            <a
              className="ms-5"
              href={tryDemo}
              style={{ textDecoration: "none" }}
            >
              TryDemo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              
            </a>
          </div>
          <div className="mt-4 ms-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a herf={appStore}>
              <img
                src="media/images/appstorebadge.svg"
                style={{ marginLeft: "50px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
