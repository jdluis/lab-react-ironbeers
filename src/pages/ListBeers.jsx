import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListBeers() {
  const [allBeers, setAllBeers] = useState(null);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setAllBeers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        {allBeers === null
          ? "Loading"
          : allBeers.map((beer) => {
              return (
                <Link
                  to={`/beers/${beer._id}`}
                  key={beer._id}
                  className="hover:bg-slate-100 max-w-md m-auto w-full flex gap-5 items-center justify-start border-b-2 p-2"
                >
                  <div className="w-10 h-32">
                    <img
                      className="w-full h-full"
                      src={beer.image_url}
                      alt={beer.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{beer.name}</h3>
                    <p className=" text-md text-gray-600">{beer.tagline}</p>
                    <p>
                      <span className="font-bold">Created by: </span>
                      {beer.contributed_by}
                    </p>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default ListBeers;
