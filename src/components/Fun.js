import React from "react";
import { setup, random, draw, mouseX, mouseY } from "react-p5";
import Sketch from "react-p5";


export default function Fun() {

    let x = 350;
    let y = 200;
 
    setup = (p5, parent) => {
    p5.createCanvas(2000, 2000).parent(parent);
    p5.background(0);
    p5.fill(140, 191, 248, 60);
    ;}

    draw = p5 => {
    x=p5.random(10,4000);
    y=p5.random(10,4000)
    p5.circle(x,y, 240);
    x++;
    y++
}
 

    return(
        <div className="head">
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}