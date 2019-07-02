import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import './style/hero-card.scss'

function HeroCard({ item }) {
    return (
        <div className="hearo-card" style={{ backgroundImage: `url(${item.thumbnail})` }}>
            <Row>
                <Col xs="12" sm="12" md="6" className="h-card-meta">
                    <div className="h-card-title">
                        <Link to={`/play/${item._id}`}>{item.title}</Link>
                    </div>
                    <p>{item.summary}</p>
                    <ul className="event-info">
                        <li>
                            <img src={item.event_logo} /> {item.event_name}
                        </li>
                        <li>
                            <span>🕒</span>
                            {item.event_date}
                        </li>
                        <li>
                            <span>📌 </span> {item.event_location}
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
                    <Link to={`/play/${item._id}`}>
                        <div className="h-video-player">
                            <div className="h-video-inner">
                                <div
                                    className="h-video-thumbnail"
                                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                                >
                                    <div className="video-overlay">
                                        <div className="video-overla-color">
                                            <img src="/images/play-btn.png" alt="play button" width="60" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default HeroCard
