import React from "react";
import { useEffect, useState } from 'react';
import Sketch from "react-p5";
import "./Track.css";
import Search from './SearchBar';
import { setup, draw, mouseX, mouseY } from "react-p5";

async function fetchPost(setItems,x) {
    const response = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/search?query="+ x +"&pageSize=1&api_key=go3zpdsGv6uMVAS1L1dSK3X02Aq7i2xQDZzdtl9c"
      );

    const food = await response.json();
    setItems(food.foods[0].foodNutrients);
}
 
export default function Track() {

    const [items, setItems] = useState([]);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchInput, setSearchInput] = useState(query || 'Cheese');
  
    useEffect(() => {
      fetchPost(setItems,searchInput);
    }, [searchInput]);

    console.log(items);

    const dummy= items.filter((item) => item.nutrientName==="Energy").map((item)=> item.nutrientNumber);
    const energy = dummy[0];
    console.log(energy);


//P5 visualization

let x = 350;
let y = 200;
 
setup = (p5, parent) => {
p5.createCanvas(700, 500).parent(parent);
p5.background("#424A3B");
p5.fill(140, 191, 248, 60);
;}

draw = p5 => {
p5.circle(x,y, energy);
}
 
 
return (
    <div className="track">
    <Search 
          searchQuery={searchInput}
          setSearchQuery={setSearchInput}
        /> 
    <Sketch setup={setup} draw={draw} />
    </div>
)
}
 