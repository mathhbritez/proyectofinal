import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";

export default function Home() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(res => res.json())
      .then(data => setCharacters(data.results || []));
  }, [search]);

  return (
    <div className="container">
      <h1>Rick and Morty Explorer</h1>
      <SearchBar setSearch={setSearch} />
      <CharacterList characters={characters} />
    </div>
  );
}
