import React, { useState, useEffect } from "react";
import "./form.scss";
import DocumentUpload from "./DocumentUpload"
import DocumentUpload2 from "./DocumentUpload2"
import { Link, BrowserRouter} from 'react-router-dom';

import axios from "axios";
const Form = () => {
  const intialValues = {
    companyName: "",
    buildingType: "",
    state: "",
    companyType: "",
    email: "",
    branch: "",
    chamberOfCommercialNumber: "",
    commercialRegisterNumber: "",
    companyWebsite: "",
    countryOfFormation: "",
    matrix: "",
    companyShortName: "",
    contactPerson: "",
    dateOfIssue: "",
    vat: "",
    dateOfExpiry: "",
    mobileNumber: "",
    dateOfEstablishment:"",
    city:""
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formData={
    "variables": {
      "companyName" : {
          "value" : formValues.companyName,
          "type": "String"
      },
      "buildingType" : {
        "value" : formValues.buildingType,
        "type": "String"
  },
  "state" : {
    "value" : formValues.state,
    "type": "String"
},
"companyType" : {
  "value" : formValues.companyType,
  "type": "String"
},
"branch" : {
  "value" : formValues.branch,
  "type": "String"
},
"chamberOfCommercialNumber" : {
  "value" : formValues.chamberOfCommercialNumber,
  "type": "integer"
},
"commercialRegisterNumber" : {
  "value" : formValues.commercialRegisterNumber,
  "type": "integer"
},
"companyWebsite" : {
  "value" : formValues.companyWebsite,
  "type": "String"
},
"countryOfFormation" : {
  "value" : formValues.countryOfFormation,
  "type": "String"
},
"matrix" : {
  "value" : formValues.matrix,
  "type": "String"
},
"companyShortName" : {
  "value" : formValues.companyShortName,
  "type": "String"
},
"contactPerson" : {
  "value" : formValues.contactPerson,
  "type": "String"
},

"dateOfIssue" : {
  "value" : formValues.dateOfIssue,
  "type": "String"
},
"email" : {
  "value" : formValues.email,
  "type": "String"
},
"mobileNumber" : {
  "value" : formValues.mobileNumber,
  "type": "String"
},
"vat" : {
  "value" : formValues.vat,
  "type": "String"
},
"dateOfExpiry" : {
  "value" : formValues.dateOfExpiry,
  "type": "String"
},
"dateOfEstablishment":{"value": formValues.dateOfEstablishment, "type": "String"},
"city":{"value": formValues.city, "type": "String"}
}};
const formData1={
  companyName : formValues.companyName,
  buildingType :formValues.buildingType,
  state:formValues.state,
  companyType:formValues.companyType,
  branch:formValues.branch,
chamberOfCommercialNumber: formValues.chamberOfCommercialNumber,
commercialRegisterNumber: formValues.commercialRegisterNumber,
companyWebsite: formValues.companyWebsite,
countryOfFormation: formValues.countryOfFormation,
matrix: formValues.matrix,
companyShortName: formValues.companyShortName,
contactPerson: formValues.contactPerson,
dateOfIssue: formValues.dateOfIssue,
vat: formValues.vat,
dateOfExpiry: formValues.dateOfExpiry,
mobileNumber: formValues.mobileNumber,
email:formValues.email,
dateOfEstablishment: formValues.dateOfEstablishment,
city:formValues.city
};


  const formSubmit = (e) => {
   e.preventDefault();
   axios({
    method: 'post',
    url: 'http://localhost:8089/engine-rest/process-definition/key/DigitalOnBoarding/start',
    data: formData,
    headers: {
    'Content-Type': 'application/json'
    }, 
  })
  axios({
    method: 'post',
    url: 'http://localhost:8086/saveModal',
    data: formData1,
    headers: {
    'Content-Type': 'application/json'
    }, 
  })
  
    console.log(formData);

    console.log(formData1);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
   
  };
  const submit = () => {
    console.log(formValues);
    
  };
  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.companyName) {
      errors.companyName = "Cannot be blank";
    } else if (values.companyName.length > 20) {
      errors.companyName = "Password must be more than 4 characters";
    }

    if (!values.companyShortName) {
      errors.companyShortName = "Please enter company Name";
    } else if (values.companyShortName.length > 20) {
      errors.companyShortName =
        "Company name Should be less than 20 characters";
    }

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.companyType) {
      errors.companyType = "Cannot be empty ";
    } else if (values.companyType.length > 15) {
      errors.companyType = "Mobile number should be less than 15";
    }

    if (!values.contactPerson) {
      errors.contactPerson = "Cannot be blank";
    } else if (values.contactPerson.length < 2) {
      errors.contactPerson = "character should be more than 2 characters";
    }
    if (!values.countryOfFormation) {
      errors.countryOfFormation = "Cannot be empty ";
    } else if (values.countryOfFormation.length > 15) {
      errors.countryOfFormation = "Mobile number should be less than 15";
    }
    if (!values.chamberOfCommercialNumber) {
      errors.chamberOfCommercialNumber = "Cannot be empty ";
    } else if (values.chamberOfCommercialNumber.length > 15) {
      errors.chamberOfCommercialNumber = "should be less than 15";
    }

    if (!values.commercialRegisterNumber) {
      errors.commercialRegisterNumber = "Cannot be empty ";
    } else if (values.commercialRegisterNumber.length > 15) {
      errors.commercialRegisterNumber = "should be less than 15";
    }

    if (!values.dateOfIssue) {
      errors.dateOfIssue = "Issue date required";
    } else if (values.dateOfIssue.length > 20) {
      errors.dateOfIssue = "";
    }
    if (!values.dateOfExpiry) {
      errors.dateOfExpiry = "Expiry date required";
    } else if (values.dateOfExpiry.length > 20) {
      errors.expiry = "";
    }
    if (!values.dateOfEstablishment) {
      errors.dateOfEstablishment = "Establishment date required";
    } else if (values.dateOfEstablishment.length > 20) {
      errors.dateOfEstablishment = "";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile number required";
    } else if (values.mobileNumber.length > 15) {
      errors.mobileNumber = "Mobile number should be less than 15";
    }
    if (!values.branch) {
      errors.branch = "Cannot be blank";
    } else if (values.branch.length > 20) {
      errors.branch = "Company name Should be less than 20 characters";
    }
    return errors;
  };

  useEffect(() => {
    async function Postcompany() {
      const res = await axios.post("http://localhost:8086/savemodel", formValues);
      let data1 = res.data;
      console.log(formValues);
       console.log(data1);

    }
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
      
    }
  }, [formErrors]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
        <div className="test2">
          <div class="form-group col-md-3">
            <label htmlFor="text">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formValues.companyName}
              onChange={handleChange}
              className={formErrors.companyName && "input-error"}
            />
            {formErrors.companyName && (
              <span className="error">{formErrors.companyName}</span>
            )}
          </div>
          <div class="form-group col-md-3">
            <label for="inputPassword4">Please Select</label>
            <label class="rd1">
              <input
                class="rd1"
                name="buildingType"
                type="radio"
                value="Resident"
                onChange={handleChange}
              />
              Resident{" "}
            </label>
            <label>
              <input
                class="rd2"
                name="buildingType"
                type="radio"
                value="Non-Resident"
                onChange={handleChange}
              />
              Non-Resident
            </label>
          </div>

          <div class="form-group col-md-3">
            <label htmlFor="text">Country of formation</label>
            <input
              type="text"
              name="countryOfFormation"
              id="countryOfFormation"
              value={formValues.countryOfFormation}
              onChange={handleChange}
              className={formErrors.countryOfFormation && "input-error"}
            />
            {formErrors.countryOfFormation && (
              <span className="error">{formErrors.countryOfFormation}</span>
            )}
          </div>
          <div class="form-group col-md-3">

            <label htmlfor="select">State*</label>
            <br></br>
            <select
              class="form-group form-control col-md-12"
              name="state"
              id="state"
              value={formValues.state}
              onChange={handleChange}
              className={formErrors.state && "input-error"}
              required
            >
              <option>Select</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
            </select>
            {formErrors.state && (
              <span className="error">{formErrors.state}</span>
            )}
          </div>
        </div>

        <div className="test2">
          <div class="form-group col-md-3">
            <label htmlFor="email">Company Short Name</label>
            <input
              type="text"
              name="companyShortName"
              id="companyShortName"
              value={formValues.companyShortName}
              onChange={handleChange}
              className={formErrors.companyShortName && "input-error"}
            />
            {formErrors.companyShortName && (
              <span className="error">{formErrors.companyShortName}</span>
            )}
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="text">Campany type</label>
            <input
              type="text"
              name="companyType"
              id="companyType"
              value={formValues.companyType}
              onChange={handleChange}
              className={formErrors.companyType && "input-error"}
            />
            {formErrors.companyType && (
              <span className="error">{formErrors.companyType}</span>
            )}
          </div>
          <div class="form-group col-md-3">
            <label for="inputPassword4">Mashreq Matrix Required</label>
            <form class="form-control">
              <label class="rd1">
                <input
                  class="rd1"
                  name="matrix"
                  type="radio"
                  value="Yes"
                  onChange={handleChange}
                />
                Yes{" "}
              </label>
              <label>
                <input
                  class="rd2"
                  name="matrix"
                  type="radio"
                  value="no"
                  onChange={handleChange}
                />
                No
              </label>
            </form>
          </div>
          <div class="form-group col-md-3">
            <label htmlfor="select">city*</label>
            <br></br>
            <input
              class="form-group form-control col-md-12"
              name="city"
              type="text"
              id="drop"
              value={formValues.city}
              onChange={handleChange}
              className={formErrors.city && "input-error"}
            >
            
            </input>
            
            {formErrors.city && (
              <span className="error">{formErrors.city}</span>
            )}
          </div>
        </div>
        <div className="test2">
          <div className="form-group col-md-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email && "input-error"}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="text">Chamber of commercial number</label>
            <input
              type="text"
              name="chamberOfCommercialNumber"
              id="chamberOfCommercialNumber"
              value={formValues.chamberOfCommercialNumber}
              onChange={handleChange}
              className={formErrors.chamberOfCommercialNumber && "input-error"}
            />
            {formErrors.chamberOfCommercialNumber && (
              <span className="error">
                {formErrors.chamberOfCommercialNumber}
              </span>
            )}
          </div>
        </div>
        <div className="test2">
          <div className="form-group col-md-3">
            <label htmlFor="conatctperson">Contact Person</label>
            <input
              type="contactPerson"
              name="contactPerson"
              id="contactPerson"
              value={formValues.contactPerson}
              onChange={handleChange}
              className={formErrors.contactPerson && "input-error"}
            />
            {formErrors.contactPerson && (
              <span className="error">{formErrors.contactPerson}</span>
            )}
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="text">Commerical Establish Number</label>
            <input
              type="text"
              name="commercialRegisterNumber"
              id="commercialRegisterNumber"
              value={formValues.commercialRegisterNumber}
              onChange={handleChange}
              className={formErrors.commercialRegisterNumber && "input-error"}
            />
            {formErrors.commercialRegisterNumber && (
              <span className="error">
                {formErrors.commercialRegisterNumber}
              </span>
            )}
          </div>
        </div>
        <div className="test2">
          <div class="form-group col-md-3">
            <label htmlFor="text">Branch</label>
            <input
              type="text"
              name="branch"
              id="branch"
              value={formValues.branch}
              onChange={handleChange}
              className={formErrors.branch && "input-error"}
            />
            {formErrors.branch && (
              <span className="error">{formErrors.branch}</span>
            )}
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="link">Company Website</label>
            <input
              type="link"
              name="companyWebsite"
              id="companyWebsite"
              value={formValues.companyWebsite}
              onChange={handleChange}
              className={formErrors.companyWebsite && "input-error"}
            />
            {formErrors.companyWebsite && (
              <span className="error">{formErrors.companyWebsite}</span>
            )}
          </div>
        </div>
        <div className="test2">
          <div class="form-group col-md-3">
            <label htmlFor="date">Date of Issue</label>
            <input
              type="date"
              name="dateOfIssue"
              id="dateOfIssue"
              value={formValues.dateOfIssue}
              onChange={handleChange}
              className={formErrors.dateOfIssue && "input-error"}
            />
            <br></br>
            {formErrors.dateOfIssue && (
              <span className="error">{formErrors.dateOfIssue}</span>
            )}
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="text">TRN-TAX Registration Number(VAT)</label>
            <input
              type="text"
              name="vat"
              id="vat"
              value={formValues.vat}
              onChange={handleChange}
              className={formErrors.vat && "input-error"}
            />
            <br></br>
            {formErrors.vat && <span className="error">{formErrors.vat}</span>}
          </div>
        </div>
        <div class="form-group col-md-3">
          <label htmlFor="date">Date of Expiry</label>
          <input
            type="date"
            name="dateOfExpiry"
            id="dateOfExpiry"
            value={formValues.dateOfExpiry}
            onChange={handleChange}
            className={formErrors.dateOfExpiry && "input-error"}
          />
          <br></br>
          {formErrors.dateOfExpiry && (
            <span className="error">{formErrors.dateOfExpiry}</span>
          )}
        </div>

        <div class="form-group col-md-3">
          <label htmlFor="date">Date of Establishment</label>
          <input
            type="date"
            name="dateOfEstablishment"
            id="dateOfEstablishment"
            value={formValues.dateOfEstablishment}
            onChange={handleChange}
            className={formErrors.dateOfEstablishment && "input-error"}
          />
          <br></br>
          {formErrors.dateOfEstablishment && (
            <span className="error">{formErrors.dateOfEstablishment}</span>
          )}
        </div>

        <div class="form-group col-md-3">
          <label htmlfor="mobileNumber">Mobile Number*</label>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            value={formValues.mobileNumber}
            onChange={handleChange}
            className={formErrors.mobileNumber && "input-error"}
            Placeholder="+91"
            required
          />
          {formErrors.mobileNumber && (
            <span className="error">{formErrors.mobileNumber}</span>
          )}
        </div>
        <div className="table2">
        </div>
          <div className="card">
                 
                  <div class="form-row">
                    <div class="form-group col-md-2">
                      {/* <button class="btn btn-primary" type="submit" id="ath1">
                        Attach File{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-paperclip"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                        </svg>
                      </button> */}
                      
                    </div> 
                  </div>
                  <DocumentUpload/>
                  <div class="form-group col-md-12">
                    <select class="form-group col-md-6" name="cars" id="drop">
                      <option>Select</option>
                      <option value="1">1</option>
                          <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  
                  <DocumentUpload2></DocumentUpload2>
                  <label class="form-group col-md-2">
                    {" "}
                    <h6>Uploaded Documents</h6>
                  </label>

                  <div class="row">
                    <div class="col-sm-3">
                      <div class="card">
                        <div class="card-body">
                          <div class="table-responsive">
                            <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Delete</th>
                                  <th>Account Type</th>
                                  <th>Company</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-x-lg"
                                      viewBox="0 0 16 16"
                                      onClick=""
                                    >
                                      <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                    </svg>
                                  </td>
                                  <td>Current Account</td>
                                  <td>AED</td>
                                </tr>
                              </tbody>
                            </table>

                            <button type="button" class="btn btn-primary">
                              ADD ANOTHER ACCOUNT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                    <h6>AOF Data Entry Aotor</h6>
                      <div class="card">
                      
                          <form class="form-control" id="rd">
                            <label class="rd">
                              <input
                                class=""
                                name="radiobutton"
                                type="radio"
                                value="radiobutton"
                              />
                              ARM{" "}
                            </label>
                            <label class="rd">
                              <input
                                class="rd"
                                name="radiobutton"
                                type="radio"
                                value="radiobutton"
                              />
                              Customer
                            </label>
                            <label class="rd">
                              <input
                                class="rd"
                                name="radiobutton"
                                type="radio"
                                value="radiobutton"
                              />
                              MO
                            </label >
                            <label class="rd">
                              <input
                                class="rd"
                                name="radiobutton"
                                type="radio"
                                value="radiobutton"
                              />
                              RM
                            </label>
                          </form>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
        
                <div class="form-group col-md-3">
        <button type="submit">Validate</button>
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <BrowserRouter>
          <Link to = "/ajay">
          <button onClick={formSubmit}>Submit</button></Link>
          </BrowserRouter>
        )}</div>
        <div> </div>
      </form>
      

    </div>
  );
};

export default Form;
