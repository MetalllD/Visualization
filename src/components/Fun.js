import React from "react";
import { setup, random, draw, mouseX, mouseY, preload } from "react-p5";
import Sketch from "react-p5";
import "./Fun.css";
import Papa from "papaparse";
import FoodData from "./Food_Production.csv";


/*function printFile(file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
        console.log(evt.target.result);
    };
    reader.readAsText(FoodData);
}*/
 

 /* textAlign(CENTER, TOP);
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "Food and Serving");
    const serving = table.getNum(r, "Serving");
    const calories = table.getNum(r, "Calories");
    const x = random(0, width);
    const y = random(0, height);
    const size = map(serving, 0, 280, 0, 100);
    const fillColor = map(calories, 0, 130, 255, 0);
    fill(fillColor, 50, 50);
    circle(x, y, size);
    fill(0);
    text(name, x, y + size / 2 + 5);
  }
*/


export default function Fun() {

   /* const changeHandler = (event) => {
        //console.log(event.target.files[0])
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
              console.log(results.data)
            },
          });
    };
    */

    /*Papa.parse(Food_Production.csv, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log(results.data)
        },
      });*/


      Papa.parse(FoodData, {
        download: true,
        step: function (input) {
          console.log(input.data);
        },
      });

    let x = 350;
    let y = 200;
    let r,g,b = 0;

    let table;

   /* preload = (p5) => {
    table = p5.loadTable("Food_Production.csv", "csv", "header");
    }
   */

    setup = (p5, parent) => {
    p5.createCanvas(1000, 600).parent(parent);
    p5.background(0);
    p5.fill(140, 191, 248, 60);
    }

    console.log(table);


    draw = p5 => {
    x=p5.random(0,1000);
    y=p5.random(0,600)
    r = p5.random(0,255);
    g = p5.random(0,255);
    b = p5.random(0,255);
    p5.fill(r,g,b);
    p5.circle(x,y, 240, 60);
    x++;
    y++
    }
 

    return(
        <div className="head">
            
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}