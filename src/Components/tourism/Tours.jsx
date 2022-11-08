import React from "react";
import Places from "./data";

const Tours = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
      {Places.map((place) => {
        return (
          <div className="col" key={place.id}>
            <div className="card h-100">
              <img
                src={place.image}
                className="card-img-top w-100 h-100"
                alt=".."
              />
              <div className="card-body">
                <h5 className="card-title text-center">{place.name}</h5>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => props.func(place)}
              >
                Show Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
