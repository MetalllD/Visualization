import { useEffect, useState } from 'react';

const apikey="563492ad6f9170000100000178fe7636859d4997a057245c8c4ea5b6"; 

async function fetchImage(setImage,x) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${x.altText}&page=1&per_page=1`,
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apikey,
        },
    });

    const foodImage = await response.json();
    setImage(foodImage.photos[0]);
}

export default function FoodImage(altText) {
    const [image, setImage] = useState();
    
    useEffect(() => {
        fetchImage(setImage, altText);
      }, [altText]);

    if(!image)
    return <>loading...</>
    
    return (
        <div>
            <img src={image.src.large} alt={altText}/>
        </div>
    )
}