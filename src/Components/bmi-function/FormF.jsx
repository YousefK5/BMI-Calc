import React, { useState } from 'react'
import Box from '../bmi-class/Box'

function FormF() {
    const [height , setHeight] = useState(0);
    const [weight , setWeight] = useState(0);
    const [bmi , setBmi] = useState(0);
    const [showBox , setShowBox] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      const newBmi= weight / ((height/100)*(height/100)) ;
      console.log(height,weight,newBmi);
      setBmi(newBmi);
      setShowBox(true);
    }
    const handleWeight = (e) => {
      setWeight(e.target.value);
    }
  return (
        <div className="container content">
            <h1>BMI Calculator</h1>
            <input type="checkbox" name="choose" id="" />
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Height in cm
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Height"
                  onChange={(e) => {setHeight(e.target.value)}}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Weight in kg
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Weight"
                  onChange={handleWeight}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Calculate
              </button>
            </form>
            {showBox ? <Box result={bmi}/> : " "}
          </div>
  )
}

export default FormF