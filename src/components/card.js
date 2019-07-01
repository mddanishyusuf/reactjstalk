import React from 'react'

import './style/card.scss'

function Card({ item }) {
    return (
        <div className="card-box">
            <div className="card-container">
                <div className="card-inner">
                    <div className="image" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                        <div className="overlay-inner" />
                    </div>
                    <div className="meta">
                        <div className="title">{item.title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
