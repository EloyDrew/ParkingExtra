import React, { Component } from 'react';
import FrontScreen from './FrontScreen';
import UploadMap from './UploadMap';
import RecordMileage from './EditMap';
import ViewMaps from './ViewMaps';
import EditMap from './EditMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUploadMap: false,
      showFrontScreen: true,
      showEditMap: false,
      showViewMaps: false
    }
    this.uploadMapToggle = this.uploadMapToggle.bind(this);
    this.frontScreenToggle = this.frontScreenToggle.bind(this);
    this.editMapToggle = this.editMapToggle.bind(this);
    this.viewMapsToggle = this.viewMapsToggle.bind(this);
  }

  frontScreenToggle() {
    this.setState(
      {
        showFrontScreen: true,
        showUploadMap: false,
        showEditMap: false,
        showViewMaps: false
      });
  }
  uploadMapToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showUploadMap: true,
        showEditMap: false,
        showViewMaps: false
      });
  }
  editMapToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showUploadMap: false,
        showEditMap: true,
        showViewMaps: false
      });
  }
  viewMapsToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showUploadMap: false,
        showEditMap: false,
        showViewMaps: true
      });
  }

  render() {
    return (

      <div class="col-13 offset-0 my-5">

        {/* Renders FrontScreen */}
        {
          this.state.showFrontScreen ?
            <FrontScreen
              uploadMapToggle={this.uploadMapToggle}
              editMapToggle={this.editMapToggle}
              viewMapsToggle={this.viewMapsToggle}
            /> : null
        }

        {/* Renders FuelScreen */}
        {
          this.state.showUploadMap ? <UploadMap
            frontScreenToggle={this.frontScreenToggle}
          /> : null
        }

        {/* Renders EditMap */}
        {
          this.state.showEditMap ? <EditMap
            frontScreenToggle={this.frontScreenToggle} /> : null
        }

        {/* Renders ViewMapsScreen */}
        {
          this.state.showViewMaps ? <ViewMaps
            frontScreenToggle={this.frontScreenToggle} /> : null
        }

      </div>
    );
  }
}
export default App;