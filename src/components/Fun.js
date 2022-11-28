import React from "react";
import { setup, random, draw, mouseX, mouseY } from "react-p5";
import Sketch from "react-p5";
import "./Fun.css";

export default function Fun() {

    let x = 350;
    let y = 200;
    let r,g,b = 0;
 
    setup = (p5, parent) => {
    p5.createCanvas(1000, 600).parent(parent);
    p5.background(0);
    p5.fill(140, 191, 248, 60);
    ;}

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