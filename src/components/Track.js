import React from "react";
import { useEffect, useState } from 'react';
import Sketch from "react-p5";
import "./Track.css";
import Search from './SearchBar';
import { setup, draw, mouseX, mouseY } from "react-p5";

/*async function fetchPost(setItems,x) {
    const response = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/search?query="+ x +"&pageSize=1&api_key=go3zpdsGv6uMVAS1L1dSK3X02Aq7i2xQDZzdtl9c"
      );

    const food = await response.json();
    setItems(food.foods[0].foodNutrients);
}*/
 
export default function Track() {

/*    const [items, setItems] = useState([]);

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
*/

//P5 visualization


let r1;
let r2;

let a1 = 0;
let a2 = 0;

let prevX;
let prevY;

let a1Inc;
let a2Inc;
 
setup = (p5, parent) => {
p5.createCanvas(1200, 800).parent(parent);
p5.background("#424A3B");
p5.angleMode(p5.DEGREES);
p5.fill(140, 191, 248, 60);

r1 = p5.random(100,160);
r2 = p5.random(100,160);

a1Inc = p5.random(0,0.1);
a2Inc = p5.random(0,0.1);


;}

draw = p5 => {
p5.translate(p5.width/2.5, p5.height/2);
p5.stroke(255);

for(let i=0; i<100; i++){

let x1 = r1*Math.cos(a1);
let y1 = r1*Math.sin(a1);

let x2 = x1 + r2*Math.cos(a2);
let y2 = y1 + r2*Math.sin(a2);

let r = p5.map(Math.sin(p5.frameCount), -1, 1, 100, 200);
let g = p5.map(Math.cos(p5.frameCount), -1, 1, 100, 200);
let b = p5.map(Math.sin(p5.frameCount), -1, 1, 200, 100);

p5.stroke(r,g,b);

//p5.point(x1,y1);

p5.line(prevX, prevY, x2, y2);

prevX = x2;
prevY = y2;

a1 = a1+a1Inc;
a2 = a2+a2Inc;

}

}
 
 
return (
    <div className="track">
    <Sketch setup={setup} draw={draw} />
    </div>
)
}
 