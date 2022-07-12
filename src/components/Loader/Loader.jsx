import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div className="opposites">
        <div className="opposites bl"></div>
        <div className="opposites tr"></div>
        <div className="opposites br"></div>
        <div className="opposites tl"></div>
      </div>
    </div>
  );
};

export default Loader;
