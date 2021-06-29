import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="text-white py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 my-3">
              <NavLink to="/" className="link-medium text-white">
                LODGEEK
              </NavLink>
              <div className="text-small text-white mt-3">
                Search for Homes, screen tenants, sign lease and pay rents.
              </div>
            </div>

            <div className="col-md-2 col-12 my-3">
              <div className="link-small text-white">Product</div>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Reviews management
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Embed Instagram stories
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Display Instagram feeds
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Collect reviews
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Send email requests
                </Link>
              </p>
            </div>

            <div className="col-md-2 col-12 my-3">
              <div className="link-small text-white">Company</div>

              <p>
                <Link to="/" className="text-x-small text-white">
                  About EmbedSocial
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Brand Guidelines
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Press Kit
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Support
                </Link>
              </p>
            </div>

            <div className="col-md-2 col-12 my-3">
              <div className="link-small text-white">Integrations</div>

              <p>
                <Link to="/" className="text-x-small text-white">
                  WordPress
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Shopify
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Magento
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Squarespace
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Intercom
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Slack
                </Link>
              </p>
            </div>

            <div className="col-md-2 col-12 my-3">
              <div className="link-small text-white">Integrations</div>

              <p>
                <Link to="/" className="text-x-small text-white">
                  WordPress
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Shopify
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Magento
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Squarespace
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Intercom
                </Link>
              </p>
              <p>
                <Link to="/" className="text-x-small text-white">
                  Slack
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
