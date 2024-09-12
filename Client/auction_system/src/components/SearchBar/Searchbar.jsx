
import './Searchbar.css';


function SearchBar() 
  {

  return (
    <>
    <div className="searchContainer">
    <div className="searchopt1-container">

      <form>

        <div className="searchItem-Container">
          <label >Search For Items:</label>
          <input
            id="searchTerm"
            type="text"
            placeholder="Search For Items"
            
             />
        </div>




        <div className="zipcode-Container">
          <label htmlFor="ZipCode">Zipcode</label>

          <input
            className='spaced-zip'
            id="ZipCode"
            type="text"
            placeholder="Zip Code"
            
             />
        </div>


        <div className="distanceContainer">
          <label htmlFor="Distance">Distance</label>

          <select
            id="Distance"
            
           >

            <option value="5 Miles">5 Miles</option>
            <option value="10 Miles">10 Miles</option>
            <option value="25 Miles">25 Miles</option>
            <option value="50 Miles">50 Miles</option>
            <option value="100 Miles">100 Miles</option>
            <option value="250 Miles">250 Miles</option>
            <option value="500 Miles">500 Miles</option>

          </select>
        </div>
        <div className="button1">


          <button>Go</button>
        </div>
      </form>
    </div>
    <div className="searchopt2-container">

        <form>

          <div className="catagory-container">

            <label htmlFor="Vehicle type">Vehicle type</label>

            <select id="VehicleType">
              
              
              <option value="">No Category Selected</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="Hatchback">Hatchback</option>
              <option value="coupe">coupe</option>
              <option value="van">van</option>
              <option value="suv">suv</option>

            </select>
          </div>

          <div className="button2">
            <button >Go</button>
            </div>
            <div className="button3">

            <button >Show All Items</button>
          </div>

        </form>

      </div>
      </div>
      </>
  );
};


export default SearchBar;
