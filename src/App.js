import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import Error400 from "./pages/Error400";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/random-beer" element={<RandomBeer />} />
        <Route path="/beers/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="*" element={<Error400 />} />
      </Routes>
    </div>
  );
}

export default App;
