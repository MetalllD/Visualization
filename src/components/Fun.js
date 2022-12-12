import React from "react";
import { text, setup, random, draw, mouseX, mouseY, preload } from "react-p5";
import p5 from "react-p5";
import Sketch from "react-p5";
import "./Fun.css";
import data from "./data.json";


export default function Fun() {

    let x = 350;
    let y = 200;
    let r,g,b = 0;


function setup(p5) {
  p5.createCanvas(1510, 3000);
  p5.background("#424A3B");

 
  p5.textAlign(p5.center, p5.top);

  for (let r = 0; r < data.length; r++) {
    const name = data[r].Food_product;
    const emmi = data[r].Total_emissions;
    
 /*   if(emmi<=1){
    const x = p5.random(100, 1300);
    const y = p5.random(100,300);
    const fillColor =p5.map(emmi, 0, 30, 0, 255);
    p5.circle(x, y, emmi*8);
    p5.fill(fillColor, 50, 50);
    p5.stroke(255,255,255)
    p5.strokeWeight(0);
    p5.fill(255,255,255);
    p5.text(name, x, y + emmi / 2 + 5);
    p5.text(emmi, x, y + emmi / 2 + 20);
    p5.fill(fillColor, 50, 50);
    }

    if((emmi<5) && (emmi>1)){
        const x = p5.random(100, 1300);
        const y = p5.random(400, 800);
        const fillColor =p5.map(emmi, 0, 30, 0, 255);
        p5.circle(x, y, emmi*8);
        p5.fill(fillColor, 50, 50);
        p5.stroke(255,255,255)
        p5.strokeWeight(0);
        p5.fill(255,255,255);
        p5.text(name, x, y + emmi / 2 + 5);
        p5.text(emmi, x, y + emmi / 2 + 20);
        p5.fill(fillColor, 50, 50);
        }

    
        if((emmi<25) && (emmi>5)){
            const x = p5.map(emmi, 5, 25, 100, 1300);
            const y = p5.random(1200,1300);
            const fillColor =p5.map(emmi, 0, 30, 0, 255);
            p5.circle(x, y, emmi*8);
            p5.fill(fillColor, 50, 50);
            p5.stroke(255,255,255)
            p5.strokeWeight(0);
            p5.fill(255,255,255);
            p5.text(name, x, y + emmi / 2 + 5);
            p5.text(emmi, x, y + emmi / 2 + 20);
            p5.fill(fillColor, 50, 50);
            }
*/
    const x = p5.random(100, 1300);
    const y = p5.random(150, 2800);
    const fillColor =p5.map(emmi, 0, 30, 0, 255);
    p5.circle(x, y, emmi*10);
    p5.fill(fillColor, 50, 50);
    p5.stroke(255,255,255)
    p5.strokeWeight(0);
    p5.fill(255,255,255);
    p5.text(name, x, y + emmi / 2 + 5);
    
    p5.text(Math.round(emmi * 100) / 100, x, y + emmi / 2 + 20);
    p5.fill(fillColor, 50, 50);
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
        <div>
            <h4>These represent greenhouse gas emissions per kg of food product(Kg CO2 - equivalents per kg product) across different stages in the lifecycle of food production.</h4>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}