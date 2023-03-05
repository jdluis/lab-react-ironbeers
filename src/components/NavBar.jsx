import { Link } from "react-router-dom";
function NavBar() {
  return (
    <ul className="flex border-b justify-evenly text-white">
      <li className="mr-1">
        <Link
          className="bg-white inline-block py-2 px-4 text-3xl text-blue-500 hover:opacity-75 font-semibold"
          to="/"
        >
          🏠
        </Link>
      </li>
     {/*  <li>
        <Link
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          to="/beers"
        >
          All Beers
        </Link>
      </li>
      <li className="mr-1">
        <Link
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          to="/random-beer"
        >
          Random Beer
        </Link>
      </li>
      <li className="mr-1">
        <Link
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          to="/new-beer"
        >
          New Beer
        </Link>
      </li> */}
    </ul>
  );
}

export default NavBar;
