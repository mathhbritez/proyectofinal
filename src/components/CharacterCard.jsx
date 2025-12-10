import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <Link to={`/character/${character.id}`}>Ver detalles</Link>
    </div>
  );
}
