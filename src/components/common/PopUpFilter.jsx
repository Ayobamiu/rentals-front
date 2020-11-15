import React, { Component } from "react";

class PopUpFilter extends Component {
  state = {};
  render() {
    return (
      <div className="pop-up-filter" id="pop-up-filter">
        <div className="pop-up-filter-filter">
          <span className="pop-up-filter-title">Price</span>
          <div className="pop-up-filter-price">
            <input
              className="pop-up-filter-price-input"
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder="Min"
            />
            <input
              className="pop-up-filter-price-input"
              type="number"
              name="maxPrice"
              id="maxPrice"
              placeholder="Max"
            />
          </div>
          <span className="pop-up-filter-title">Types</span>
          <div className="pop-up-filter-type">
            <input
              type="checkbox"
              name="one"
              id="one"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="one">Single Room</label>
            <input
              type="checkbox"
              name="two"
              id="two"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="two">Hotel</label>
            <input
              type="checkbox"
              name="three"
              id="three"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="three">Whole Apartment</label>
            <input
              type="checkbox"
              name="four"
              id="four"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="four">Shared Space</label>
            <input
              type="checkbox"
              name="five"
              id="five"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="five">Air conditioned</label>
          </div>
        </div>
        <div className="pop-up-filter-sort">
          <span className="pop-up-filter-title">Types</span>
          <div className="pop-up--filter-item">
            <input
              type="radio"
              name="sort"
              id="one"
              value="one"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="one">sort</label>
          </div>
          <div className="pop-up--filter-item">
            <input
              type="radio"
              name="sort"
              id="two"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="two">sort</label>
          </div>
          <div className="pop-up--filter-item">
            <input
              type="radio"
              name="sort"
              id="three"
              onClick="this.checked =!this.checked"
            />
            <label htmlFor="three">sort</label>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpFilter;
