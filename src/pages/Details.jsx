import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p>Cargando...</p>;

  return (
    <div className="details">
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
    </div>
  );
}
