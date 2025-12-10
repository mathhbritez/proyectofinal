export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar personaje..."
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  );
}
