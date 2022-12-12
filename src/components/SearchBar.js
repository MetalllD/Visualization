import './SearchBar.css';


const SearchBar = ({ setSearchQuery }) => (
    <form>
        <label htmlFor="header-search">
            <div className="visually-hidden"></div>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Food Items"
            name="s"
        />
        <button onClick={() => setSearchQuery(document.getElementById('header-search').value)} type="submit">Search</button>
    </form>
);

export default SearchBar;