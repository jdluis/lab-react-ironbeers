import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigator = useNavigate();

  const addNewBeer = async () => {
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy,
      });

      navigator("/beers")

    } catch (err) {
      console.log(err)
      navigator("/error")
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewBeer()
  };
  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-md max-w-md m-auto bg-slate-200 mt-10">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tagline" className="block text-gray-700 font-bold mb-2">
          Tagline
        </label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows="4"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="first_brewed"
          className="block text-gray-700 font-bold mb-2"
        >
          First Brewed
        </label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={firstBrewed}
          onChange={(event) => setFirstBrewed(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="attenuationLevel"
          className="block text-gray-700 font-bold mb-2"
        >
         Attenuation Level
        </label>
        <input
          type="number"
          name="attenuationLevel"
          id="attenuationLevel"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={attenuationLevel}
          onChange={(event) => setAttenuationLevel(event.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="contributedBy"
          className="block text-gray-700 font-bold mb-2"
        >
          Contributed By:
        </label>
        <input
          type="text"
          name="contributedBy"
          id="contributedBy"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={contributedBy}
          onChange={(event) => setContributedBy(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="brewers_tips"
          className="block text-gray-700 font-bold mb-2"
        >
          Brewers Tips
        </label>
        <textarea
          name="brewers_tips"
          id="brewers_tips"
          rows="4"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={brewersTips}
          onChange={(event) => setBrewersTips(event.target.value)}
          required
        />
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add My New Beer</button>
      </div>
    </form>
  );
}

export default NewBeer;
