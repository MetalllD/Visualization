import { useEffect, useState } from 'react';
import './App.css';
import Chart from "./components/Chart";
import Search from './components/SearchBar';


async function fetchPost(setItems) {
    const response = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/search?query=apples&pageSize=1&api_key=go3zpdsGv6uMVAS1L1dSK3X02Aq7i2xQDZzdtl9c"
      );

    const food = await response.json();
    setItems(food.foods[0].foodNutrients);
}


function App() {

  const [items, setItems] = useState([]);

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchInput, setSearchInput] = useState(query || 'Apple');

  useEffect(() => {
    fetchPost(setItems,searchInput);
  }, [searchInput]);

  return (
    <div className="App">
      <Search 
        searchQuery={searchInput}
        setSearchQuery={setSearchInput}
      />
      Heyy, See {searchInput} Nutirents<br/>
      <Chart info={items} />
    </div>
  );
}

export default App;