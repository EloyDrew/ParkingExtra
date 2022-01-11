import React, { Component } from 'react';
import Button from './Button';
import MyChart from './MyChart';
import image from "./background.png";

class ResultsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


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

                        {/* Title */}
                        <h3 class="display-5"> Results</h3>
                    </div>

                    {/* Select Car Dropdown */}
                    <div>
                        <select>
                            <option value="null">Select A Car</option>
                            <option value="car1">Car1</option>
                            <option value="car2">Car2</option>
                            <option value="car3">Car3</option>
                            <option value="car4">Car4</option>
                        </select>
                    </div>

                    {/* Chart */}
                    <div>
                        <MyChart />
                    </div>

                    {/* Price Input */}
                    <form>
                        <label>
                            Price (£):
                            <input type="number" name="price" placeholder="Enter Price" />
                            VAT inc?

                            {/* VAT Checkbox */}
                            <input type="checkbox" name="checkbox" />
                        </label>
                    </form>

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
export default ResultsScreen;