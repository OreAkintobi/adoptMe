import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

// gets rendered for
const SearchParams = () => {
  // sets up hooks and default values for each hook
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  // schedules useEffect promise
  useEffect(() => {
    //   runs setBreeds from within useEffect first (sets 'Breeds' to empty array)
    setBreeds([]);
    // runs setBreed after setBreeds, sets 'Breed' to empty string
    setBreed("");

    //   goes to api, gets breeds back from api and then,
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      // converts each breed into a breedString as a selectable option,
      const breedStrings = apiBreeds.map(({ name }) => name);
      // and populates 'Breeds' with each option
      setBreeds(breedStrings);
    }, console.error);
    //   dependencies defined so that change in a variable such as 'location' does not schedule the Effect to re-render our options
  }, [animal, setBreed, setBreeds]);

  // user sees this first, then scheduled useEffect is run
  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
