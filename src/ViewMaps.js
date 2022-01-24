import React, { Component } from 'react';
import Button from './Button';
import image from "./background.png";

class ViewMaps extends Component {
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
                        <h3 class="display-5"> View Maps</h3>
                    </div>

                    {/* Select Map */}
                    <div>
                        <select>
                            <option value="null">Select A Map</option>
                            <option value="map1">Map 1</option>
                            <option value="map2">Map 2</option>
                            <option value="map3">Map 3</option>
                            <option value="map4">Map 4</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
export default ViewMaps;