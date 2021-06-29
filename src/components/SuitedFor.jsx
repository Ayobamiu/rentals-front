import React, { Component } from "react";
import coup from "../image/coup.jpg";
import couple_illustration from "../image/couple_illustration.jpg";
import couple from "../image/couple.jpg";
import student from "../image/student.jpg";

class SuitedFor extends Component {
  state = {
    services: [
      { id: 1, name: "Couple", image: couple },
      { id: 2, name: "Family", image: coup },
      { id: 3, name: "Student", image: student },
      { id: 4, name: "Singles", image: couple_illustration },
    ],
  };
  render() {
    return (
      <div className="homepage-suited-for">
        <h1 className="section-heading color-white">Suited for you</h1>
        <div className="homepage-suited-for-list">
          {this.state.services.map((service) => (
            <div key={service.id} className="homepage-suited-for-item">
              <div className="homepage-suited-for-item-image">
                <img
                  className="homepage-suited-for-item-image-img"
                  src={service.image}
                  alt=""
                />
              </div>
              <div className="homepage-suited-for-item-text">
                <p>{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SuitedFor;
