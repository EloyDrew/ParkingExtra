import React, { Component } from 'react';
import Button from './Button';
import image from "./background.png";

class FrontScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">

                {/* Display Background (Width adds extra blank white space to right of screen?*/}
                <div style={{
                    backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",
                    height: 750, width: 750
                }}>

                    {/* Title */}
                    <div class="header">
                        <h3 class="display-5">Fuel + Mileage Tracker</h3>
                    </div>


                    <br /><br /><br /><br /><br />
                    {/* RecordFuel Button */}
                    <div>
                        <Button theme="RecordButton" onClick={this.props.recordFuelToggle}>
                            Record Fuel
                        </Button>
                    </div>

                    {/* RecordMileage Button */}
                    <div>
                        <Button theme="RecordButton" onClick={this.props.recordMileageToggle}>
                            Record Mileage
                        </Button>
                    </div>

                    {/* ShowResults Button */}
                    <div>
                        <Button theme="ResultsButton" onClick={this.props.resultsScreenToggle}>
                            View Results
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default FrontScreen;