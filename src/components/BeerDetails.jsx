import React from "react";

function BeerDetails(props) {
  const { beer } = props;
  return (
    <div className="flex gap-5 mx-5 flex-col justify-center items-center">
      <div className="w-20">
        <img className="w-full" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="flex gap-5 justify-between w-full">
        <div>
          <h3 className="text-3xl pb-2">{beer.name}</h3>
          <p className="text-gray-600">{beer.tagline}</p>
        </div>
        <div>
          <p className="text-gray-600 text-3xl pb-2">
            {beer.attenuation_level}
          </p>
          <p className="font-bold">{beer.first_brewed}</p>
        </div>
      </div>
      <div>
        <p>{beer.description}</p>
      </div>
      <div className="w-full">
        <p className="text-gray-600">{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
