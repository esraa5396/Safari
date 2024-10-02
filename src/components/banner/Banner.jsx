import React from 'react';
import './banner.css';
import SkyScrapper from '../../images/skyscrepper.jpg';

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-wrapper">
                <div className="banner-layout">
                    <h1 className="banner-layout-title">
                        DUBAI IS WATING FOR YOU
                    </h1>
                </div>
                <img src={SkyScrapper} alt="dubai-banner" className="banner-img" />
            </div>
        </div>
    )
}
