import React from 'react';
import './sort-input.css';

export default function SortInput({toursLength, setSortItem, sortItem}) {
    return (
        <div className="sort-input-container">
            <div className="available-tours">
                {toursLength} Tours Found <i className="bi bi-info-circle"></i>
            </div>
            <select onChange={(e) => setSortItem(e.target.value)} value={sortItem}>
                <option value="recomended">Recomended</option>
                <option value="low">Price - Low to High</option>
                <option value="high">Price - High to Low</option>
            </select>
        </div>
    )
}
