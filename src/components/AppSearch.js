import "./AppSearch.css";
export default function AppSearch(props) {
  const { value, onValueChange } = props;
  return (
    <div className="app-search">
      <input
        type="text"
        className="app-search-input"
        placeholder="search for your favorite dog here ..."
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  );
}
