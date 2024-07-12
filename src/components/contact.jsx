import React from  'react'
import star from "/images/star.png";

export default function Contact(props){

    let badgeText
    if (props.item.openSpots === 0){
        badgeText = 'Sold out'
    }else if (props.item.location === 'Online'){
        badgeText = 'Online'
    }
  
    return(
        <div className="contact--card">
            {badgeText && <div className='badge'>{badgeText}</div>}
            <img src={props.item.coverImg} alt="" className='card--image' />
            <div className='card--stats'>
                <img src={star} className='card--star' />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location} </span>
            </div>
            <div className='card--details'>
            <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>
            </div>
            
           
        </div>


    )
}