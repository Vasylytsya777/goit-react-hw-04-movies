import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="loader">
      <Loader type="ThreeDots" color="black" height={80} width={80} />
    </div>
  );
};

export default LoaderSpinner;
