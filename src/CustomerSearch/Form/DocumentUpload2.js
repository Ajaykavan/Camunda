import React, { useState } from 'react'
import {  Form, FormGroup, Label, Input,Col, CustomInput } from 'reactstrap';
import axios,{post} from 'axios';
import { Button } from 'reactstrap';

function DocumentUpload2() {
  
    const [files,setFile]=useState([]);
    const [isFilePicked,setIsFilePicked] = useState(false);
    const onChange = (e) => {
      setFile(e.target.files[0]);
      setIsFilePicked(true);
    }
  const uploadDoc=async(e)=>{
      e.preventDefault();
      console.log(files);
   try {
       await fileUpload(files[0]);

     } catch (e) {
       console.log(e.response) // undefined
     }
     
     function fileUpload(files){
       const url = 'http://localhost:8086/saveDocument';
       const formData = new FormData();
       formData.append('file',files)
       const config = {
           headers: {
              'Content-Type': 'multipart/form-data',
           },     
       }
       alert('Document is uploaded!');
       
       return  post(url, formData,config)
     }
  }
                return (
                    <div style={{overflowX:'hidden'}}>
                    <div className="card">
                <div className="card-body">
                  <h4>Upload Unique Documents*</h4>
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
                      {isFilePicked ? (
        <tr>
          <td>{files.name}</td>
          <td>{files.size}b</td>
          <td>{files.type}</td>
          <td>
            {" "}
            {files.lastModifiedDate.toLocaleDateString()}
          </td>
        </tr>
      ) : (
        <p></p>
      )}
                      </tbody>
                    </table>
                  </div>
                </div>
                      <Form className="my-3 ml-5" >
                          
      
                          <FormGroup row>
                              
                              <Col sm={2}>
                                      
                                  <div class="custom-file mb-3">
                                  {/* <input type="file" onChange={onChange} className="custom-file-input" name={fileName} id="input" /> */}
                                  
                                  <CustomInput type="file" onChange={onChange} id="input" name="customFile" />
                                  </div> 
                    
                               </Col>
                               <Col sm={4}>
                               
                               <Button  onClick={uploadDoc} style={{background:'#254a9e',color:'white'}}>Upload </Button>
                              </Col>
                              
                          </FormGroup>
      
                     </Form>
      
                     <div className="App" >
                     </div>
                  </div>
                  </div>     
                );
                

    }    
export default DocumentUpload2