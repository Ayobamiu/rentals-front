import React, { Component } from "react";
import lagos from "../image/lagos.jpg";
import abuja from "../image/abuja.jpg";
import enugu from "../image/enugu.jpg";
import ph from "../image/ph.jpg";
import kano from "../image/kano.jpg";
import kaduna from "../image/kaduna.jpg";
import imo from "../image/imo.jpg";
import ibadan from "../image/ibadan.jpg";

class Cities extends Component {
  state = {
    cities: [
      { id: 1, name: "Lagos", image: lagos },
      { id: 2, name: "Abuja", image: abuja },
      { id: 3, name: "Enugu", image: enugu },
      { id: 4, name: "Port Harcourt", image: ph },
      { id: 5, name: "Kano", image: kano },
      { id: 6, name: "Kaduna", image: kaduna },
      { id: 7, name: "Imo", image: imo },
      { id: 8, name: "Ibadan", image: ibadan },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="homepage-cities">
          <h1 className="section-heading ">Find stay in different cities</h1>
          <div className="homepage-cities-list">
            {this.state.cities.map((city) => (
              <div className="homepage-cities-city" key={city.id}>
                <div className="homepage-cities-city-image">
                  <img
                    className="homepage-cities-city-image-img"
                    src={city.image}
                    alt=""
                  />
                </div>
                <div className="homepage-cities-city-text">{city.name}</div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cities;
