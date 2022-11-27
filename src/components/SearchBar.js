import './SearchBar.css';


const SearchBar = ({ searchInput, setSearchInput }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <div className="visually-hidden"></div>
        </label>
        <input
            value={searchInput}
            onInput={e => setSearchInput(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search Food Items"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;