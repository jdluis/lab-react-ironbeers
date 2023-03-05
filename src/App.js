import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import Error400 from "./pages/Error400";
import Error500 from "./pages/Error500";

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
        <Route path="/error" element={<Error500 />} />
      </Routes>
    </div>
  );
}

export default App;
