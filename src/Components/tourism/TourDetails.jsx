import React from "react";

const TourDetails = (props) => {
  const { place } = props;
  return (
    <div>
      <div className="col" key={place.id}>
        <div className="card h-100 ">
          <img src={place.image} className="card-img-top w-50 h-50" alt=".." />
          <div className="card-body">
            <h5 className="card-title text-center">{place.name}</h5>
            <h5 className="card-title text-center">{place.info}</h5>
            <h5 className="card-title text-center">Price {place.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
