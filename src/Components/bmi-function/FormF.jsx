import React, { useEffect, useState } from "react";
import Box from "../bmi-class/Box";

function FormF(props) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [showBox, setShowBox] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBmi = weight / ((height / 100) * (height / 100));
    console.log(height, weight, newBmi);
    setBmi(newBmi);
    setShowBox(true);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  useEffect(() => {
    console.log("function Mount");
    return () => {
      console.log("function Unmount");
    };
  }, []);

  useEffect(() => {
    if (height === 0) {
      return;
    }
    console.log("state height Update");
  }, [height]);

  useEffect(() => {
    if (weight === 0) {
      return;
    }
    console.log("state weight Update");
  }, [weight]);
  return (
    <div className="container content">
      <h1>BMI Calculator Function Form</h1>
      <button
        type="button"
        onClick={() => {
          props.toggleForm();
        }}
      >
        Show Class Form
      </button>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Function Height in cm
          </label>
          <input
            type="number"
            className="form-control"
            id="Height"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Function Weight in kg
          </label>
          <input
            type="number"
            className="form-control"
            id="Weight"
            onChange={handleWeight}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Function Calculate
        </button>
      </form>
      {showBox ? <Box result={bmi} /> : " "}
    </div>
  );
}

export default FormF;
