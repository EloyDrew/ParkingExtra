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
                        <h3 class="display-5">Parking Manager</h3>
                    </div>


                    <br /><br /><br /><br /><br />
                    {/* Upload Map Button */}
                    <div>
                        <Button theme="BlueButton" onClick={this.props.uploadMapToggle}>
                            Upload + Add Map
                        </Button>
                    </div>

                    {/* Edit Map Button */}
                    <div>
                        <Button theme="BlueButton" onClick={this.props.editMapToggle}>
                            Edit Map
                        </Button>
                    </div>

                    {/* ViewMaps Button */}
                    <div>
                        <Button theme="OrangeButton" onClick={this.props.viewMapsToggle}>
                            View Maps
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default FrontScreen;