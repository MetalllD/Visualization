import React from "react";
import Lottie from 'react-lottie';
import animationData from './food.json';
import "./Lottie1.css";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

export default function Lottie1() {


    return(
        <div className="animation">
            <Lottie 
	             options={defaultOptions}
                 height={400}
                 width={400}
             />
        </div>
    );
}