import React ,{useState , useEffect} from "react";
import "../App.css";
import Form from "./Form/Form";

const NewCustomer = () => {
  return (
    <div>
      <br></br>
      <div
        class="accordion accordion-flush border border-dark"
        id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Mandatory Information
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
           <div class="accordion-body">
             <Form/>
              {/*<form onSubmit={mandatory} noValidate >
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label >Company Name*</label>
                    <input
                      type="text"
                      name="companyname"
                      
                      id="inputEmail4"
                      value={formdata.companyname}
                      onChange={mandatoryInformation}
                      className={formErrors.companyname && "input-error"}
                    />
                    {formErrors.companyname&& (
            <span className="error">{formErrors.companyname}</span>
          )}
                  </div>


                  <div class="form-group col-md-3">
                    <label for="inputPassword4">Please Select</label>

                    <form class="form-control">
                      <label class="rd1">
                        <input
                          class="rd1"
                          name="radiobutton"
                          type="radio"
                          value={formdata.resident}
                          onChange={mandatoryInformation}
                        />
                        Resident{" "}
                      </label>
                      <label>
                        <input
                          class="rd2"
                          name="radiobutton"
                          type="radio"
                          value={formdata.nonresident}
                          onChange={mandatoryInformation}
                        />
                        Non-Resident
                      </label>



                      
                    </form>
                  </div>



                  <div class="form-group col-md-3">
                    <label for="inputPassword4">Country of Formation*</label>
                    <input class="form-control" name="formationofcountry" onChange={mandatoryInformation}
                      value={formdata.formationofcountry} required/>
                  </div>


                  <div class="form-group col-md-3">
                    <label for="inputPassword4">State*</label>
                    <select
                      class="form-group form-control col-md-12"
                      name="state"
                      id="drop"
                      value={formdata.state}
                      onChange={mandatoryInformation}
                      required
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                {/* -----------------------Second line */}





               {/* <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputEmail4">Company Short Name*</label>
                    <input
                      type="text"
                      name="companyshortname"
                      class="form-control"
                      id="inputEmail4"
                      value={formdata.companyshortname}
                      onChange={mandatoryInformation}
                      required
                    />
                  </div>





                  <div class="form-group col-md-3">
                    <label for="inputPassword4">Company Type*</label>
                    {/* <input class="form-control"
                     /> */}
                   {/* <select
                      class="form-group form-control col-md-12"
                      name="companytype"
                      id="drop"
                      onChange={mandatoryInformation}
                      value={formdata.companytype}
                      required
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>



                  
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">Mashreq Matrix Required*</label>
                    <form class="form-control">
                      <label class="rd1">
                        <input
                          class="rd1"
                          name="radiobutton1"
                          type="radio"
                          value={formdata.radiobutton1}
                          onChange={mandatoryInformation}
                        />
                        No{" "}
                      </label>
                      <label>
                        <input
                          class="rd2"
                          name="radiobutton1"
                          type="radio"
                          value={formdata.radiobutton1}
                          onChange={mandatoryInformation}
                        />
                        Yes
                      </label>
                    </form>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">City*</label>
                    <select
                      class="form-group form-control col-md-12"
                      name="city"
                      id="drop"
                      value={formdata.city}
                      onChange={mandatoryInformation}
                      required
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                {/* 3rd line----------------------------------------- */}

                {/*<div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputEmail4">Contact Person*</label>
                    <input type="text" name="contactPerson" class="form-control"value={formdata.contactPerson} onChange={mandatoryInformation} required />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">
                      Commercial Registration Number*{" "}
                    </label>
                    <input class="form-control" type="text" name="commercialregisternumber" value={formdata.commercialregisternumber} onChange={mandatoryInformation} required/>
                  </div>
                </div>

                {/* 4th line ------------------------------------------ */}

               {/* <div class="form-row">
                  <div class="form-group col-md-3">
                    <label htmlfor="email">E-Mail ID*</label>
                    <input
                      type="email"
                      name="emailid"
                      value={formdata.emailid}
                      className={formErrors.email && "input-error"}
                      id="inputEmail4"
                      onChange={mandatoryInformation}     
                    />
                    {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">
                      Chamber of Commerce Number*
                    </label>
                    <input class="form-control" type="text" name="chamberofcommercenumber" value={formdata.chamberofcommercenumber} onChange={mandatoryInformation}/>
                  </div>
                </div>

                {/* 5th line --------------------------------------- */}

               {/* </div> <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputEmail4">Branch*</label>
                    <select
                      class="form-group form-control col-md-12"
                      name="branch"
                      value={formdata.branch}
                      onChange={mandatoryInformation}
                      id="drop"
                      required
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">Company Website</label>
                    <input class="form-control" name="companywebsite" value={formdata.companywebsite} onChange={mandatoryInformation}/>
                  </div>
                </div>

                {/* 6th--------------------------------------line */}

                {/*<div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputEmail4">Date of Issue*</label>
                    <input class="form-control" type="date" name="dateofissue" value={formdata.dateofissue} onChange={mandatoryInformation} />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">
                      TRN-TAX Registration Number(VAT)
                    </label>
                    <input class="form-control" type="text" name="registernumber" value={formdata.registernumber} onChange={mandatoryInformation}/>
                  </div>
                </div>

                {/* 7th line ------------------------------- */}

                {/*<div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputEmail4">Date of Expiry*</label>
                    <input class="form-control" type="date" name="dateofexpiry" value={formdata.dateofexpiry} onChange={mandatoryInformation} required/>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputEmail4">Date of Establishment</label>
                    <input type="date" class="form-control" name="dateofestablishment" value={formdata.dateofestablishment} onChange={mandatoryInformation} required />
                  </div>
                </div>

                {/* 8th line---------------------------- */}
                {/*<div class="form-row">
                  <div class="form-group col-md-1">
                    <label for="inputEmail4">Country Code*</label>
                    <input class="form-control" type="code" name="countrycode" value={formdata.countrycode} onChange={mandatoryInformation} placeholder="91" />
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputEmail4">Mobile Number*</label>
                    <input class="form-control" type="text
                    " name="mobilenumber" value={formdata.mobilenumber} onChange={mandatoryInformation} required/>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4>Upload Consent Form*</h4>
                    <br></br>
                    <h6>Consent Form Evidence of Authority signatory</h6>
                    <div class="table-responsive  col-md-6">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>File Name</th>
                            <th>Size</th>
                            <th>Created By</th>
                            <th>Created On</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
                     {/* <span class="btn btn-default btn-file float-right ml-2 ">
                        Attach File <input type="file" />
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
                      </span>
                    </div>
                    <div class="form-group col-md-2">
                      <button class="btn btn-primary" type="submit" id="up1">
                        Upload
                      </button>
                    </div>
                  </div>
                  <label class="form-group col-md-2">
                    {" "}
                    <h6>Uploaded Documents</h6>
                  </label>
                  <div class="form-group col-md-12">
                    <select class="form-group col-md-6" name="cars" id="drop">
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <label class="form-group col-md-2">
                    {" "}
                    <h5>Upload Unique Documents*</h5>
                  </label>

                  <div class="table-responsive  col-md-6">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Size</th>
                          <th>Created By</th>
                          <th>Created On</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="form-group col-md-2">
                    <span class="btn btn-default btn-file float-left ml-4 ">
                      Attach File <input type="file" />
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
                    </span>
                    <button
                      class="btn btn-primary float-right col-md-4"
                      type="submit"
                      id="up2"
                    >
                      Upload
                    </button>
                  </div>
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
                <div class="form-group col-md-2">
                <button type="submit" class="btn btn-primary" >
                  Validate Form
                </button>
              </div>
              </form>}
              <br/>
              

              {/*   ----table border responsive----
               <div class="panel">
                <div class="table-responsive text-center">

                  <table class="table table-bordered">
                    <thead> ... </thead>
                    <tbody> ... </tbody>
                  </table>

                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}          

export default NewCustomer;
