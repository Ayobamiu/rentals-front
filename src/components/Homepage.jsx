import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavbarMain from "./NavbarMain";

class Homepage extends Component {
  state = {};
  componentDidMount() {
    window.onscroll = function () {
      const homepageMainMessageSearch = document.getElementById(
        "homepageSearch"
      );
      const hideAndShowSearch = document.getElementById("hideAndShowSearch");
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > "150") {
        homepageMainMessageSearch.style.display = "none";
        hideAndShowSearch.style.display = "block";
      } else {
        homepageMainMessageSearch.style.display = "flex";
        hideAndShowSearch.style.display = "none";
      }
    };
  }
  showFilter = () => {
    const popUpFilter = document.getElementById("pop-up-filter");
    if (popUpFilter.style.display === "block") {
      popUpFilter.style.display = "none";
    } else {
      popUpFilter.style.display = "block";
    }
  };
  showSearchBar = () => {
    const mainNavbarSearch = document.getElementById("main-navbar__search");
    if (mainNavbarSearch.style.display === "flex") {
      mainNavbarSearch.style.display = "none";
    } else {
      mainNavbarSearch.style.display = "flex";
    }
  };
  render() {
    return (
      <>
        <div className="main-navbar" id="main-navbar">
          <NavLink className="main-navbar__logo" to="/">
            Logo
          </NavLink>
          <NavLink
            className="main-navbar__search"
            id="main-navbar__search"
            to="/"
          >
            <div className="main-navbar__search-search">
              <i className="fa fa-search main-navbar__search-icon"></i>
              <input
                type="search"
                name="search"
                className="main-navbar__search-input"
                placeholder="Where on Earth?"
              />
              <button className="main-navbar__search-button">Search</button>
            </div>
            <div className="main-navbar__search-filter">
              <i className="fa fa-filter" onClick={this.showFilter}></i>
              <span
                className="main-navbar__search-filter-text"
                onClick={this.showFilter}
              >
                Filters
              </span>
            </div>
            <div className="pop-up-filter" id="pop-up-filter"></div>
          </NavLink>
          <span
            id="hideAndShowSearch"
            className="resize-icon-22"
            onClick={this.showSearchBar}
          >
            <i className="fa fa-search "></i>
          </span>
          <NavLink className="main-navbar__link" to="/">
            <span className="resize-icon-22">
              <i className="fa fa-heart-o "></i>
            </span>
          </NavLink>
          <NavLink className="main-navbar__link btn-blue" to="/">
            Host a Home
          </NavLink>
          <NavLink className="main-navbar__link btn-white" to="/signup">
            Sign Up
          </NavLink>
        </div>
        <main
          className="homepage-main-message"
          id="homepage-main-message-search"
        >
          <h1 className="homepage-main-message-text">
            Find short-term and long-term stay in rooms anywhere
          </h1>
          <div className="homepage-main-message-search" id="homepageSearch">
            <div className="main-navbar__search-search">
              <i className="fa fa-search main-navbar__search-icon"></i>
              <input
                type="search"
                name="search"
                className="main-navbar__search-input"
                placeholder="Where on Earth?"
              />
              <button className="main-navbar__search-button">Search</button>
            </div>
            <div className="main-navbar__search-filter">
              <i className="fa fa-filter" onClick={this.showFilter}></i>
              <span
                className="main-navbar__search-filter-text"
                onClick={this.showFilter}
              >
                Filters
              </span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            alias quae ipsa iure qui reiciendis assumenda recusandae in dolores
            nihil, ab quisquam nulla harum at, vero debitis culpa numquam
            quidem? Quam sit in ipsam veniam dolor mollitia nostrum fugit rerum
            suscipit ratione minus provident nam hic placeat possimus, debitis
            aliquid ullam ea eius. Voluptate adipisci in corporis ad similique
            doloribus praesentium harum illum labore reprehenderit, est porro
            numquam modi aliquam, obcaecati et sed voluptas sunt earum
            consequuntur necessitatibus eaque nobis. Exercitationem illo
            eligendi aliquid tenetur? Et dolorem molestiae eius unde obcaecati
            accusantium, ipsa nam? Beatae est explicabo delectus dolorem! Quo
            deleniti aspernatur est esse tempora, accusantium saepe fuga earum
            numquam dolor tenetur doloribus! Quam sint autem delectus. Deleniti
            impedit dolores repellat ea distinctio, ducimus at incidunt
            doloremque laborum exercitationem. Possimus vitae nesciunt quos
            cupiditate eligendi consequatur quam deleniti ut quaerat facere,
            impedit ab minus libero nulla voluptates. Accusamus quae corporis
            fuga. Recusandae alias temporibus, vitae non consequuntur quis!
            Suscipit vero porro dolores voluptatibus eaque voluptatem nihil quas
            accusantium reiciendis explicabo iusto doloremque id facilis
            distinctio omnis, quo molestiae deserunt ducimus aspernatur alias
            ullam nisi et? Recusandae magnam, ab a mollitia laboriosam tempora
            dolorum hic, dicta in nostrum perferendis consequuntur repudiandae.
          </p>
        </main>
      </>
    );
  }
}

export default Homepage;
