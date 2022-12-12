import React from "react";
import { setup, random, draw, mouseX, mouseY, preload } from "react-p5";
import p5 from "react-p5";
import Sketch from "react-p5";
import "./Fun.css";
import data from "./data.json";


export default function Fun() {

    

    let x = 350;
    let y = 200;
    let r,g,b = 0;


function setup(p5) {
  p5.createCanvas(1200, 1000);
  p5.background(220);

 
  p5.textAlign(p5.CENTER, p5.TOP);
  for (let r = 0; r < data.length; r++) {
    const name = data[r].Food_product;
    const emmi = data[r].Total_emissions;
    const x = p5.random(0, 1000);
    const y = p5.random(0,800);
    p5.circle(x, y, emmi*10);
    p5.fill(140, 191, 248, 60);
    p5.text(name, emmi);
  }
}
  
/*
function draw() {
  // rect(10, 20, 30, 40);
  // put drawing code here
}
   /* preload = (p5) => {
    table = p5.loadTable("Food_Production.csv", "csv", "header");
    }
   */

    /*setup = (p5, parent) => {
    p5.createCanvas(1000, 600).parent(parent);
    p5.background(0);
    p5.fill(140, 191, 248, 60);
    }


    draw = p5 => {
        p5.circle(x,y, );
     }

   /* draw = p5 => {
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
    */

    function draw(p5) {
        
        // put drawing code here
      }
 

    return(
        <div className="head">
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}