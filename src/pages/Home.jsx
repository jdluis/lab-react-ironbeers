import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mt-5">
      <nav>
        <Link to="/beers" className="group">
          <div>
            <img className="group-hover:opacity-75" src={beers} alt="" />
          </div>
          <div className="p-4">
            <h2 className=" text-xl font-bold">All Beers</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              saepe impedit voluptatum.
            </p>
          </div>
        </Link>

        <Link to="/beers/random-beer" className="group">
          <div>
            <img className="group-hover:opacity-75" src={randomBeer} alt="" />
          </div>
          <div className="p-4">
            <h2 className=" text-xl font-bold">Random Beer</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              saepe impedit voluptatum.
            </p>
          </div>
        </Link>

        <Link to="/beers/new-beer" className="group">
          <div>
            <img className="group-hover:opacity-75" src={newBeer} alt="" />
          </div>
          <div className="p-4">
            <h2 className=" text-xl font-bold">New Beer</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              saepe impedit voluptatum.
            </p>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
