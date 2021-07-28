
import "./App.css";
import { Button } from "react-bootstrap";
import NewCustomer from "./CustomerSearch/NewCustomer";
import { Collapse } from "reactstrap";
import React , { useState } from "react";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <div class="accordion " id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header " id="panelsStayOpen-headingOne">
              <button
                class="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Customer Search
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <form>
                  <div class="form-row">
                    <div class="col-md-2 mb-3">
                      <label for="validationDefault01">Company Name</label>
                      <input
                        type="text"
                        class="form-control mt-2"
                        id="validationDefault01"
                      />
                    </div>
                    <div class="col-md-2 mb-3">
                      <label for="validationDefault02">Trade License</label>
                      <input
                        type="text"
                        class="form-control mt-2"
                        id="validationDefault02"
                      />
                    </div>
                    <div class="col-md-1 mb-3 mt-4">
                      <label for="validationDefaultUsername"></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="" id="inputGroupPrepend2">
                            <Button>Customer Search</Button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-1 mb-3 mt-4">
                      <label for="validationDefaultUsername"></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="" id="inputGroupPrepend2">
                            <Button className="clr">Clear</Button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2 mb-3 mt-3y">
                      <label for="validationDefaultUsername"></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span className="link" id="inputGroupPrepend2">
                            <a href="#">Consent Form Template</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br></br>
          
          <br></br>
  
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Dedope Result
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <div class="table-responsive  col-md-12">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>CIF Number</th>
                        <th>Customer Name</th>
                        <th>Short Name</th>
                        <th>Full Name</th>
                        <th>Trade License No. </th>
                        <th>Visa Number </th>
                        <th>Nationality </th>
                        <th>Refer to Bank </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button
                  className="btn btn-outline-primary btn-md float-right mt-3"
                  type="submit"
                >
                  Next
                </button>
                <button
                  className="btn btn-outline-primary btn-md float-right mt-3"
                  type="submit"
                >
                  Previous
                </button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
  
        <Button
              className="address-collapse "
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              New Customer
            </Button>
            <Collapse isOpen={isOpen}>
              <NewCustomer />
            </Collapse>
            
      </>
    );
  }
    


export default Home
