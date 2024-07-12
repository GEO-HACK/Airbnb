import React from  'react'
import star from "/images/star.png";

export default function Contact(props){
  
    return(
        <div className="contact--card">
            {props.openSpots === 0 && <div className='badge'>Sold out</div>}
            <img src={props.img} alt="" className='card--image' />
            <div className='card--stats'>
                <img src={star} className='card--star' />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.location} </span>
            </div>
            <div className='card--details'>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
            </div>
            
           
        </div>


    )
}