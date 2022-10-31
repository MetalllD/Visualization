import { useEffect, useState } from 'react';
import './App.css';

  async function fetchPost(setItems) {
    const response = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=go3zpdsGv6uMVAS1L1dSK3X02Aq7i2xQDZzdtl9c"
      );

    const food = await response.json();
    setItems(food);
    console.log(food);
  };


function App() {

  const [items, setItems] = useState([]);


  useEffect(() => {
    fetchPost(setItems);
  }, []);

  return (
    <div className="App">
      Heyy
    </div>
  );
}

export default App;
