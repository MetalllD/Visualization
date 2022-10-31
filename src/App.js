import { useEffect, useState } from 'react';
import './App.css';

  async function fetchPost(setItems) {
    const response = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=1&api_key=go3zpdsGv6uMVAS1L1dSK3X02Aq7i2xQDZzdtl9c"
      );

    const food = await response.json();
    setItems(food);
    console.log(food.foods[0].foodNutrients[0].nutrientName);
  };


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPost(setItems);
  }, []);

  /*console.log('data outside hook', items.map((m) => <span>${m.foods[0].foodNutrients[0].nutrientName}</span>));*/

  /*const inject = items ? items.map((it, i) => <li key={i}>{it.foods[0].foodNutrients[i].nutrientName}</li>) : null;*/

  return (
    <div className="App">
      Heyy
    </div>
  );
}

export default App;
