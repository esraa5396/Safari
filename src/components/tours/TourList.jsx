import React from 'react';
import './tour-list.css';
import TourItem from './TourItem';

export default function TousList({toursList}) {
    return (
        <div className="tour-list">
            {toursList.map((item) =>
                <TourItem item={item} key={item.id}/>
            )}
        </div>
    )
}
