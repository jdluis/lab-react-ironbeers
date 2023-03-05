import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";

function SingleBeer() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    getBeer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      console.log(response.data);
      setBeer(response.data);
    } catch (err) {
      console.log(err)
      navigator("/error")
    }
  };

  return (
    <div className="max-w-md m-auto mt-16">
      {beer === null ? "Loading" : <BeerDetails beer={beer} />}
    </div>
  );
}

export default SingleBeer;
