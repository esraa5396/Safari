import React from 'react';
import './services.css';

export default function Services() {
    return (
        <div className="services">
            <div className="service-item">
                <i className="bi bi-binoculars-fill service-icon"></i>
                Adventures
            </div>
            <div className="service-item">
                <i className="bi bi-people-fill service-icon"></i>
                Family tours
            </div>
            <div className="service-item">
                <i className="bi bi-buildings-fill service-icon"></i>
                City cards
            </div>
            <div className="service-item">
                <i className="bi bi-globe service-icon"></i>
                Multy-day trips
            </div>
        </div>
    )
}
