import React, { Component } from "react";
import { connect } from "react-redux";
import { hideOnScroll } from "../services/showAndHides";
import MainNavbar from "./common/MainNavbar";
import { addListing, loadListings } from "../store/listingSlice";
import SearchBar from "./common/SearchBar";
import PopUpFilter from "./common/PopUpFilter";

class ListingsPage extends Component {
  state = {};
  componentDidMount() {
    window.onscroll = function () {
      hideOnScroll();
    };
  }
  handleSearch = (searchQuery) => {
    const params = new URLSearchParams([["search", searchQuery]]);
    console.log(params.toString());
    this.props.loadListings(params);
  };
  render() {
    return (
      <div className="listings-page">
        <MainNavbar />

        <SearchBar getSearchQuery={this.handleSearch} />

        {/* <PopUpFilter /> */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea amet autem harum ut accusantium architecto similique soluta iusto quam ducimus totam optio voluptatem dignissimos consequuntur molestias suscipit maxime aliquid in sed, minus velit nemo! Nostrum quod aliquid doloribus fugiat amet aliquam eos blanditiis numquam voluptatum sunt provident delectus omnis, cum suscipit nisi a molestiae aperiam adipisci nihil distinctio ipsum laudantium. Maxime obcaecati suscipit pariatur quo sit at eaque nobis officia, doloremque, vero nemo? Quos non quia delectus officiis illo nobis, eaque illum aut totam nam? Alias, possimus maiores error excepturi eaque nulla, maxime dolores aperiam delectus voluptates non odit enim. Libero alias quaerat nulla quasi ullam? Incidunt quia ea consequatur repellendus, ratione rem odit ipsa, sequi quod eligendi necessitatibus asperiores quo vel, vitae animi aut laudantium debitis hic earum perspiciatis? Consectetur similique cumque suscipit neque adipisci quidem voluptatibus eius mollitia ab voluptates quia expedita nihil eligendi laboriosam ut eaque saepe a, sunt iusto quos dolorum et accusantium. Unde consequatur sit est deserunt temporibus veritatis porro, illo in provident reprehenderit recusandae omnis, velit similique vero architecto incidunt odio voluptatibus quibusdam facere? Doloremque omnis dolor molestias consectetur, provident hic obcaecati quaerat quidem maxime laudantium pariatur numquam voluptas dolore, reiciendis culpa ipsam nemo!</p>
        {this.props.listings.map((listing) => (
          <div>{listing.title}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listings: state.app.listings.list,
  loggedInUser: state.app.user.profile,
});

const matchDispatchToProps = (dispatch) => ({
  loadListings: (params) => dispatch(loadListings(params)),
  addListing: (listing) => dispatch(addListing(listing)),
});

export default connect(mapStateToProps, matchDispatchToProps)(ListingsPage);
