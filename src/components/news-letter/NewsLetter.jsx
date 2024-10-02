import React from 'react'
import './news-latter.css';
import NewsLetterImage from '../../images/person-traveling-enjoying-their-vacation_23-2151383057.jpg'

export default function NewsLetter() {
    return (
        <div className="news-letter">
            <div className="news-letter-container">
                <div className="news-letter-image-wrapper">
                    <img src={NewsLetterImage} alt="news-latter" className='news-letter-image'/>
                </div>
                <div className="news-letter-content">
                    <h2 className="news-letter-content-title">
                        Your Dubai intinerary is waiting
                    </h2>
                    <p className="news-letter-content-desc">
                        Recieve a curated 48-hour itinerary featuring the most iconic experiences in Dubai, straight to your inbox.
                    </p>
                    <div className="news-letter-inputs">
                        <input type="text" placeholder='Your Email' className='news-letter-input'/>
                        <button className="news-letter-btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
