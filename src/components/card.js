import React from 'react'

import './style/card.scss'

function Card({ item }) {
    return (
        <div className="card-box">
            <div className="card-container">
                <div className="card-inner">
                    <div className="image" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                        <div className="overlay-inner">
                            <img src="/images/play-btn.png" alt="play button" width="40" />
                        </div>
                    </div>
                    <div className="meta-data">
                        <div className="title">{item.title}</div>
                        <div className="event-logo">
                            <img src={item.event_logo} alt={item.event_name} /> <span>{item.event_name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
