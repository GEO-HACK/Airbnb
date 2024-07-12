import React from "react";
import Contact from "./contact";
import data from "../data";


export default function Card() {
    const cards= data.map(item => {
        return (
            <Contact 
                key={item.id}
                item = {item}
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
