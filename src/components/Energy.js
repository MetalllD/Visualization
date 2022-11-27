import "./Energy.css";
import React from "react";

export default function Energy(props) {

    const {info} = props;

    const calories = info.filter((item) => item.nutrientName==="Energy").map((item)=> item.nutrientNumber);
    const unit = info.filter((item) => item.nutrientName==="Energy").map((item)=> item.unitName);

    if(!info)
    return <>loading...</>

    return(
        <div className="head">
            The energy you'll get after eating this is 
            <div className="big">
              {calories} {unit}
            </div>
        </div>
    );
}