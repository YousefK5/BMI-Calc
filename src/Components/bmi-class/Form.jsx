import React, { Component } from "react";
import Box from "./Box";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      weight: 0,
      bmi: 0,
      calc: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      bmi:
        this.state.weight /
        (((this.state.height / 100) * this.state.height) / 100),
      calc: true,
    });
  };

  setHeight = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  setWeight = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };

  render() {
    return (
      <div className="container content">
        <h1>BMI Calculator Class Form</h1>
        <button
          type="button"
          onClick={() => {
            this.props.toggleForm();
          }}
        >
          Show Function Form
        </button>

        <form onSubmit={this.handleSubmit} className="w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Class Height in cm
            </label>
            <input
              type="number"
              className="form-control"
              id="Height"
              onChange={this.setHeight}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Class Weight in kg
            </label>
            <input
              type="number"
              className="form-control"
              id="Weight"
              onChange={this.setWeight}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Class Calculate
          </button>
        </form>
        {this.state.calc ? <Box result={this.state.bmi} /> : " "}
      </div>
    );
  }
}
