import React, { Component } from "react";
import lagos from "../image/lagos.jpg";
import abuja from "../image/abuja.jpg";
import enugu from "../image/enugu.jpg";
import ph from "../image/ph.jpg";
import kano from "../image/kano.jpg";
import kaduna from "../image/kaduna.jpg";
import imo from "../image/imo.jpg";
import ibadan from "../image/ibadan.jpg";
import City from "./common/city";

class Cities extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="homepage-cities">
          <h1 className="homepage-cities-heading">
            Find stay in different cities
          </h1>
          <div className="homepage-cities-list">
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={lagos}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Lagos</div>
            </div>
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={ph}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Port Harchourt</div>
            </div>
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={ibadan}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Ibadan</div>
            </div>
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={kano}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Kano</div>
            </div>
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={imo}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Imo</div>
            </div>
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={enugu}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Enugu</div>
            </div>
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={abuja}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Abuja</div>
            </div>
            <div className="homepage-cities-city">
              <div className="homepage-cities-city-image">
                <img
                  className="homepage-cities-city-image-img"
                  src={kaduna}
                  alt=""
                />
              </div>
              <div className="homepage-cities-city-text">Kaduna</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cities;
