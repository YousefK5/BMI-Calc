import React from "react";
import Places from "./data";

const Tours = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
      {Places.map((place) => {
        return (
          <div className="col">
            <div className="card h-100">
              <img src={place.image} className="card-img-top w-100 h-100" />
              <div className="card-body">
                <h5 className="card-title text-center">{place.name}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
