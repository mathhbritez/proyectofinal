import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters }) {
  return (
    <div className="grid">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
