import React from "react";
import Contact from "./contact";
import data from "../data";


export default function Card() {
    const cards= data.map(item => {
        return (
            <Contact 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount = {item.stats.reviewCount}
                location= {item.location}
                title={item.title}
                price={item.price}
                openSpots = {item.openSpots}
            />
        )
    })
   
  return (
    <div className="cards">
      {cards}
      {cards}
      {cards}
      {cards}
      
    </div>
  );
}
