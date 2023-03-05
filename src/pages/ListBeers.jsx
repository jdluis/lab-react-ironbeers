import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ListBeers() {
  const [allBeers, setAllBeers] = useState(null);
  const [strSearch, setStrSearch] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    getBeers();
  }, [strSearch]);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );

      if (strSearch === "") {
        setAllBeers(response.data);
      } else {
        onSearch(response.data);
      }
      
    } catch (err) {
      console.log(err);
      navigator("/error");
    }
  };

  const onSearch = (data) => {
    const beersFiltered = data.filter((beer) => {
      if (beer.name.includes(strSearch)) {
        return true;
      } else {
        return false;
      }
    });
    setAllBeers(beersFiltered);
  };

  const handleSearch = (e) => {
    setStrSearch(e.target.value);
  };

  return (
    <div>
      <div className="max-w-sm m-auto">
        <input
          className="w-full mx-auto border-4 border-r-4 my-5 px-4"
          placeholder="Search"
          value={strSearch}
          onChange={handleSearch}
          type="text"
        />
      </div>
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
