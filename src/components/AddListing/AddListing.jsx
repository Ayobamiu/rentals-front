import React, { useState } from "react";
import BackButton from "../common/BackButton/BackButton";
import MultiStepForm from "../common/MultiStepForm/MultiStepForm";
import "./css/style.css";
import StepWizard from "react-step-wizard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

const AddListing = (props) => {
  const [images, setImages] = useState([]);

  const ListingBasicDetail = (props) => {
    return (
      <div className="card action-card mb-3">
        <div className=" d-flex justify-content-between card-header bg-transparent border-light py-3">
          Basic Details
          <span className="link-x-small">1/4</span>
        </div>

        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.nextStep();
            }}
          >
            <div class=" mb-3 ">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control mt-2"
                id="title"
                placeholder="Title e.g A Two Bedroom Condo in Lekki, Lagos"
                required
              />
            </div>
            <div class=" ">
              <label for="floatingTextarea">Description of the property</label>
              <textarea
                class="form-control mt-2"
                placeholder="Description of the property"
                id="floatingTextarea"
                required
              ></textarea>
            </div>
            <div className="input-images my-3 action-card">
              <div className="input-images-item text-center link-small ">
                <input
                  type="file"
                  class="hiddeninput"
                  id="hiddeninput"
                  onChange={(e) => {
                    e.preventDefault();
                    const objectUrl = URL.createObjectURL(e.target.files[0]);
                    setImages([objectUrl, ...images]);
                  }}
                />
                <label for="hiddeninput" className="cursor">
                  Add Image
                </label>
              </div>
              {images.map((item, index) => (
                <div
                  className="input-images-item"
                  style={{ backgroundImage: `url(${item})` }}
                >
                  <div className="input-images-item-delete cursor">
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={() => {
                        const targetImage = images[index];
                        const newImages = images.filter(
                          (image) => image !== targetImage
                        );
                        setImages(newImages);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="secondary-button button-small ">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const OtherProperties = (props) => {
    return (
      <div className="card action-card mb-3">
        <div className="card-header d-flex justify-content-between bg-transparent border-light py-3">
          Other properties<span className="link-x-small">2/4</span>
        </div>

        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.nextStep();
            }}
          >
            <div class="row g-3 mb-3">
              <div class="col">
                <label for="inputState" class="form-label">
                  Bedrooms
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Bedrooms"
                  aria-label="Bedrooms"
                  defaultValue="0"
                />
              </div>
              <div class="col">
                <label for="inputState" class="form-label">
                  Bathrooms
                </label>

                <input
                  type="number"
                  class="form-control"
                  placeholder="Bathrooms"
                  aria-label="Bathrooms"
                  defaultValue="0"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="floatingTextarea ">Type</label>
              <select
                class="form-select my-2"
                aria-label="Select property type"
                required
              >
                <option value="" unselectable>
                  Select property type
                </option>
                <option value="1">Bungalow</option>
                <option value="2">Condo</option>
                <option value="3">Duplex</option>
              </select>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="mx-2 secondary-button button-small "
                onClick={(e) => {
                  e.preventDefault();
                  props.previousStep();
                }}
              >
                Previous
              </button>
              <button type="submit" className="secondary-button button-small ">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ListingAddress = (props) => {
    return (
      <div className="card action-card mb-3">
        <div className="card-header d-flex justify-content-between bg-transparent border-light py-3">
          Property Address <span className="link-x-small">3/4</span>
        </div>

        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.nextStep();
            }}
          >
            <label for="inputState" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Address"
              aria-label="Address"
              required
            />
            <label for="landmark" class="form-label">
              Landmark
            </label>

            <input
              type="text"
              class="form-control mb-2"
              placeholder="Landmark"
              aria-label="Landmark"
              id="landmark"
            />
            <div class="mb-3">
              <label for="floatingTextarea ">City</label>
              <select
                class="form-select my-2"
                aria-label="Select state"
                required
              >
                <option value="" unselectable>
                  Select City
                </option>
                <option value="1">Lagos</option>
                <option value="2">Umuahia</option>
                <option value="3">Ibadan</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="floatingTextarea ">State</label>
              <select
                class="form-select my-2"
                aria-label="Select state"
                required
              >
                <option value="" unselectable>
                  Select state
                </option>
                <option value="1">Lagos</option>
                <option value="2">Abia</option>
                <option value="3">Oyo</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="floatingTextarea ">Country</label>
              <select
                class="form-select my-2"
                aria-label="Select state"
                required
              >
                <option value="" unselectable>
                  Select country
                </option>
                <option value="1">Nigeria</option>
                <option value="2">United Kingdom</option>
                <option value="3">Polland</option>
              </select>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="mx-2 secondary-button button-small "
                onClick={(e) => {
                  e.preventDefault();
                  props.previousStep();
                }}
              >
                Previous
              </button>
              <button type="submit" className="secondary-button button-small ">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ListingFinacials = (props) => {
    return (
      <div className="card action-card mb-3">
        <div className="card-header d-flex justify-content-between bg-transparent border-light py-3">
          Financials <span className="link-x-small">4/4</span>
        </div>

        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.nextStep();
            }}
          >
            <label for="inputState" class="form-label">
              Agreement Fee
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                defaultValue="0"
              />
              <span class="input-group-text">.00</span>
            </div>
            <label for="inputState" class="form-label">
              Security Fee
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                defaultValue="0"
              />
              <span class="input-group-text">.00</span>
            </div>

            <label for="inputState" class="form-label">
              Rent per duration
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                placeholder="Rent"
                aria-label="Rent"
                required
              />
              <span class="input-group-text">/</span>
              <select
                class="form-select "
                aria-label="Select rent duration"
                required
              >
                <option value="1" selected>
                  month
                </option>
                <option value="2">year</option>
              </select>
            </div>

            <div class="my-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                defaultChecked
              />
              <label class="form-check-label" for="exampleCheck1">
                Available for rent
              </label>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="mx-2 secondary-button button-small "
                onClick={(e) => {
                  e.preventDefault();
                  props.previousStep();
                }}
              >
                Previous
              </button>
              <button type="submit" className="secondary-button button-small ">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const SubmitComponent = (props) => {
    return (
      <div className="card action-card mb-3">
        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="text-center my-4">
              <h1 className="display-small">Submit Listing Now</h1>
              <p>
                You can go through the form and make sure the information you
                submitted is correct.
              </p>
            </div>
            <div className="d-flex justify-content-center mb-4">
              <button
                type="submit"
                className="mx-2 secondary-button button-small"
                onClick={(e) => {
                  e.preventDefault();
                  props.previousStep();
                }}
              >
                Previous
              </button>
              <button type="submit" className="secondary-button button-small ">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          props.history.goBack();
        }}
      />
      <div id="add-listing" className="container my-5">
        <div className="link-large">Add new property for rent</div>
        <p className="text-x-small">
          Add a Listing in few steps. Add a catchy title and comprehensive
          details.
        </p>
        <div className="my-3 row">
          <div className="col-md-7 col-12">
            <StepWizard>
              <ListingBasicDetail />
              <OtherProperties />
              <ListingAddress />
              <ListingFinacials />
              <SubmitComponent />
            </StepWizard>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddListing;
