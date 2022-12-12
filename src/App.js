import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Chart from "./components/Chart";
import FoodImage from './components/FoodImage';
//import Energy from "./components/Energy";
import Search from './components/SearchBar';

async function fetchPost(setItems,x, setNoResult) {
    const response = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/search?query="+ x +"&pageSize=1&api_key=go3zpdsGv6uMVAS1L1dSK3X02Aq7i2xQDZzdtl9c"
      );

    const food = await response.json();
    setItems(food.foods[0]);
    if (!food.foods.length) {
      setNoResult(true)
    }
}

function App() {

  const [items, setItems] = useState([]);
  let [noResult, setNoResult] = useState(false);

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchInput, setSearchInput] = useState(query || 'Oats');

  useEffect(() => {
    setNoResult(false)
    fetchPost(setItems,searchInput, setNoResult);
    console.log("Here")
    console.log(items, noResult)
  }, [searchInput]);

  return (
    <div className="App">
      <div className="main">
       <Search 
          setSearchQuery={setSearchInput}
        />  
        {noResult ? <div style={{paddingTop:"10px"}}>No Results found</div> : 
        (
          <Fragment>
        <br></br>
        <FoodImage altText={searchInput} />
        <br></br>
        <span className="titles"> Here are {searchInput}'s Nutirents
        (Values are given per {items.servingSize} {items.servingSizeUnit})</span>
        <br/>

         <div className="charts">
            <Chart info={items.foodNutrients} />
        </div>
        </Fragment>)}
      </div>
    </div>
  );
}

export default App;