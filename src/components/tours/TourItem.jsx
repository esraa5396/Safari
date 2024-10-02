import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function TourItem({item}) {
    return (
        <div className='tour-item'>
            <img src={item.image} alt={item.name} className='tour-item-img'/>
            <span className='tour-item-label'>ADVANTURE</span>
            <div className="tour-item-body">
                <div className="tour-item-title">{item.title}</div>
                <div className="tour-item-duration">
                    <span>{item.duration}</span><i className="bi bi-dot"></i>
                    Pickup available
                </div>
                <Rating rating={item.rating} reviews={item.reviews}/>
                <div className="tour-item-price">
                    <strong>From ${item.priceFrom}</strong> per person
                </div>
                <Link to={`/tour/${item.id}`} className="tour-item-link">See More</Link>
            </div>
        </div>
    )
}
