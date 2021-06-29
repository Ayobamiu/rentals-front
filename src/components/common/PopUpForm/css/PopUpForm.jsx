import React from "react";
const PopUpForm = ({ listing }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Submitted");
      }}
    >
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content ">
            <div class="modal-body">
              <div className="display-small">{listing.title}</div>
              <p className="text-small">Application Form</p>
              <div class="mb-3">
                <label for="fullName" class="form-label">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div class="mb-3">
                <label for="dob" class="form-label">
                  Date of Birth
                </label>
                <input
                  required
                  type="date"
                  class="form-control"
                  id="dob"
                  placeholder="Date of Birth"
                />
              </div>
              <div class="mb-3">
                <label for="occupation" class="form-label">
                  Occupation
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="occupation"
                  placeholder="Occupation"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email Address"
                />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone
                </label>
                <input
                  required
                  type="phone"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <label for="income" class="form-label">
                Income per Month
              </label>
              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input
                  required
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text">.00</span>
              </div>
              <div class="mb-3">
                <label for="moveInDate" class="form-label">
                  Marital status
                </label>

                <select
                  name="maritalStatus"
                  id="maritalStatus"
                  className="form-control"
                >
                  <option value="0" selected>
                    Single
                  </option>
                  <option value="1">Married</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="moveInDate" class="form-label">
                  Move In Date
                </label>
                <input
                  required
                  type="date"
                  class="form-control"
                  id="moveInDate"
                  placeholder="Move In Date"
                />
              </div>
              <div class="mb-3">
                <label for="noOfOccupants" class="form-label">
                  Number of Occupants
                </label>
                <input
                  required
                  type="number"
                  class="form-control"
                  id="noOfOccupants"
                  placeholder="Number of Occupants"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn secondary-button button-medium"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn primary-button button-small">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PopUpForm;
