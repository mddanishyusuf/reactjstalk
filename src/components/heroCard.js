import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './style/hero-card.scss'

function HeroCard({ item }) {
    return (
        <div className="hearo-card" style={{ backgroundImage: `url(${item.thumbnail})` }}>
            <Row>
                <Col xs="12" sm="12" md="6" className="h-card-meta">
                    <div className="h-card-title">{item.title}</div>
                    <p>{item.summary}</p>
                    <ul>
                        <li>
                            <img src={item.event_logo} /> {item.event_name}
                        </li>
                        <li>
                            <span>🕒</span>
                            {item.event_date}
                        </li>
                        <li>
                            <span>📌 </span>London
                        </li>
                        <li>
                            <span>🎙</span>
                            {item.speakers.map((speaker, key) => (
                                <span key={key}>
                                    <a href={speaker.profile} target="noopenerrer noreferer">
                                        {speaker.name}
                                    </a>
                                </span>
                            ))}
                        </li>
                    </ul>
                </Col>
                <Col xs="12" sm="12" md="6" className="h-card-media">
                    <div className="h-video-player">
                        <div className="h-video-inner">
                            <div className="h-video-thumbnail" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                                <div className="video-overlay">
                                    <div className="video-overla-color">
                                        <img src="/images/play-btn.png" width="60" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HeroCard
