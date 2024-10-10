import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './searchbar.css';

function SearchBar() {
  return (
    <>
<div className='searchBarContainer'>
    <div className=" d-none d-sm-block">
    <div className="searchContainer">
      
          
                <div>
                  <Form className="horizontal-form">
                    
                       <Form.Group controlId="searchTerm">
                       <Form.Label>Search For Items:</Form.Label>
                       <Form.Control type="text" placeholder="Search For Items" />
                       </Form.Group> 
                
                
             
            

                       <Form.Group controlId="ZipCode">
                       <Form.Label>Zip Code</Form.Label>
                       <Form.Control type="text" placeholder="Zip Code"  />
                       </Form.Group>
                
             
            

                      <Form.Group controlId="Distance">
                      <Form.Label>Distance</Form.Label>
                      <Form.Select>
                        <option value="5 Miles">5 Miles</option>
                        <option value="10 Miles">10 Miles</option>
                        <option value="25 Miles">25 Miles</option>
                        <option value="50 Miles">50 Miles</option>
                        <option value="100 Miles">100 Miles</option>
                        <option value="250 Miles">250 Miles</option>
                        <option value="500 Miles">500 Miles</option>
                      </Form.Select>
                      </Form.Group>

                      <Button variant="secondary" type="submit" className="btn1">Go</Button>

                      
           
                      </Form>

                      </div>
                      

            <div>
                 <Form className="horizontal-form">
                      
                      <Form.Group controlId="VehicleType">
                      <Form.Label>Vehicle Type</Form.Label>
                      <Form.Select>
                        <option value="">No Category Selected</option>
                        <option value="Car">Car</option>
                        <option value="Truck">Truck</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Van">Van</option>
                        <option value="SUV">SUV</option>
                      </Form.Select>
                      </Form.Group>

  
                      <Button variant="secondary" type="submit" className="btn1">Go</Button>
                      <Button variant="secondary" type="button" className="btn2">Show All Items</Button>
                 </Form>
                 </div>

                 
                  
    
    </div>
    </div>
    </div>
    </>
  );
}

export default SearchBar;
