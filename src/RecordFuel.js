import React, { Component } from 'react';
import Button from './Button';
import image from "./background.png";

class RecordFuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showL = false;
  showKWH = false;

  render() {

    return (

      <div class="card">

        {/* Display Background */}
        <div style={{
          backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",
          height: 750, width: 750
        }}>

          <header>
            {/* Back Button */}
            <Button theme="BackButton" onClick={this.props.frontScreenToggle}>
              Back
            </Button>
          </header>

          <div class="card-body">
            <br /><br /><br />

            {/* Title PLACE THIS IN HEADER WITH BUTTON*/}
            <h3 class="display-5">Record Fuel</h3>
          </div>
          <div>

            <select>
              <option value="null">Select A Car</option>
              <option value="car1">Car1</option>
              <option value="car2">Car2</option>
              <option value="car3">Car3</option>
              <option value="car4">Car4</option>
            </select>
          </div>
          <br />

          {/* Fuel Type Drop Down (If Petrol/Diesel Switch input to (L) if electric (KWH)*/}
          <div>
            <label>
              Fuel Type:&nbsp;
              <select>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </label>
          </div>

          {/* IF ELECTRIC IS CHOSEN SHOW KWH & HIDE L

          {/* if (value ="electric")
          {
            showL = true;
          showKWH = false;    
          }
          else
          {
            showL = false;
          showKWH = true;    
          } 

          {/* Amount (KWH) Input*
          { <form>
            <label>
              Amount (KWH):&nbsp;
              <input type="number" name="amount" placeholder="Enter Amount" />
            </label>
            <br /> 
            
            */}

          {/* Amount (L) Input*/}
          <form>
            <label>
              Amount (L):&nbsp;
              <input type="number" name="amount" placeholder="Enter Amount" />
            </label>
            <br />

            {/* Price Input */}
            <label>
              Price (£):&nbsp;
              <input type="number" name="price" placeholder="Enter Price" />
              VAT inc?&nbsp;

              {/* VAT Checkbox */}
              <input type="checkbox" name="checkbox" />
            </label>
          </form>
          <br />

          Time and Date Picker
          <br />

          <div>
            Upload Receipt: <input type="file" name="price" onChange={this.fileSelectedHandler} />
            {/* <button onClick={this.fileSelectedHandler}>Upload</button> */}
          </div>
        </div>
      </div>
    );
  }
}
export default RecordFuel;