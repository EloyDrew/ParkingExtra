import React, { Component } from 'react';
import Button from './Button';
import image from "./background.png";

class UploadMap extends Component {
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

            {/* Title PLACE THIS IN HEADER WITH BUTTON*/}
            <h3 class="display-5">Upload Map</h3>
          </div>
          <br />

          <div>
            Upload Map: <input type="file" name="price" onChange={this.fileSelectedHandler} />
            {/* <button onClick={this.fileSelectedHandler}>Upload</button> */}
          </div>
        </div>
      </div>
    );
  }
}
export default UploadMap;