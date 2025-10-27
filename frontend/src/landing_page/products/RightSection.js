import React from "react";
function RightSection({ productName, productDescription, tryDemo, imageURL }) {
  return (
    <div className="container  p-5">
      <div className="row mt-5">
        <div className="col-6" style={{ marginTop: "100px" }}>
          <h1 className="mt-5 ms-5" style={{ marginTop: "100px" }}>
            {productName}
          </h1>
          <p className=" ms-5">{productDescription}</p>
          <a
            className=" ms-5"
            style={{ textDecoration: "none" }}
            href={tryDemo}
          >
            TryDemo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6 ">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
