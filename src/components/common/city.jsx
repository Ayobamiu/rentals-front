import React, { Component } from "react";

const City = (file, name) => {
  return (
    <div className="homepage-cities-city">
      <div className="homepage-cities-city-image">
        <img className="homepage-cities-city-image-img" src={file} alt="" />
      </div>
      <div className="homepage-cities-city-text">{name}</div>
    </div>
  );
};

export default City;
