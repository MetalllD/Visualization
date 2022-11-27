import { useEffect, useState } from 'react';
import './App.css';
import Chart from "./components/Chart";
import Chart2 from "./components/Chart2";
import Energy from "./components/Energy";
import Search from './components/SearchBar';


async function fetchPost(setItems,x) {
    const response = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/search?query="+ x +"&pageSize=1&api_key=go3zpdsGv6uMVAS1L1dSK3X02Aq7i2xQDZzdtl9c"
      );

    const food = await response.json();
    setItems(food.foods[0]);
}


function App() {

  const [items, setItems] = useState([]);

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchInput, setSearchInput] = useState(query || 'Cheese');

  useEffect(() => {
    fetchPost(setItems,searchInput);
  }, [searchInput]);

  return (
    <div className="App">
      <Search 
        searchQuery={searchInput}
        setSearchQuery={setSearchInput}
      />
      <br></br>
      Here are {searchInput}'s Nutirents<br/>
      <br/>
      <br/>
      (Values are given per {items.servingSize} {items.servingSizeUnit})
      <div className="charts">
      <Chart info={items.foodNutrients} />
      </div>
      <div className="charts">
      <Chart2 info={items.foodNutrients} />
      </div>
      <div className="charts">
      <Energy info={items.foodNutrients} />
      </div>
    </div>
  );
}

export default App;