import axios from "axios";
import { useState, useEffect } from "react";
import BeerDetails from "../components/BeerDetails";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    getBeer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response.data);
      setRandomBeer(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md m-auto mt-16">
      {randomBeer === null ? "Loading" : <BeerDetails beer={randomBeer} />}
    </div>
  );
}

export default RandomBeer;
