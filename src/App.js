import React, { Component } from 'react';
import FrontScreen from './FrontScreen';
import RecordFuel from './RecordFuel';
import RecordMileage from './RecordMileage';
import ResultsScreen from './ResultsScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecordFuel: false,
      showFrontScreen: true,
      showRecordMileage: false,
      showResultsScreen: false
    }
    this.recordFuelToggle = this.recordFuelToggle.bind(this);
    this.frontScreenToggle = this.frontScreenToggle.bind(this);
    this.recordMileageToggle = this.recordMileageToggle.bind(this);
    this.resultsScreenToggle = this.resultsScreenToggle.bind(this);
  }

  frontScreenToggle() {
    this.setState(
      {
        showFrontScreen: true,
        showRecordFuel: false,
        showRecordMileage: false,
        showResultsScreen: false
      });
  }
  recordFuelToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showRecordFuel: true,
        showRecordMileage: false,
        showResultsScreen: false
      });
  }
  recordMileageToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showRecordFuel: false,
        showRecordMileage: true,
        showResultsScreen: false
      });
  }
  resultsScreenToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showRecordFuel: false,
        showRecordMileage: false,
        showResultsScreen: true
      });
  }

  render() {
    return (

      <div class="col-13 offset-0 my-5">

        {/* Renders FrontScreen */}
        {
          this.state.showFrontScreen ?
            <FrontScreen
              recordFuelToggle={this.recordFuelToggle}
              recordMileageToggle={this.recordMileageToggle}
              resultsScreenToggle={this.resultsScreenToggle}
            /> : null
        }

        {/* Renders FuelScreen */}
        {
          this.state.showRecordFuel ? <RecordFuel
            frontScreenToggle={this.frontScreenToggle}
          /> : null
        }

        {/* Renders MileageScreen */}
        {
          this.state.showRecordMileage ? <RecordMileage
            frontScreenToggle={this.frontScreenToggle} /> : null
        }

        {/* Renders ResultsScreen */}
        {
          this.state.showResultsScreen ? <ResultsScreen
            frontScreenToggle={this.frontScreenToggle} /> : null
        }

      </div>
    );
  }
}
export default App;