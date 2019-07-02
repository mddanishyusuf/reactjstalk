import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './style/player.scss'

function PlayThisTalkPage({ data }) {
    console.log(data)
    const videoObj = data.single.nodes[0]
    const youtTubeId = videoObj.url.split('?v=')[1]
    const videoSrc = `https://www.youtube.com/embed/${youtTubeId}?autoplay=${1}&rel=${0}&modestbranding=${0}`
    return (
        <>
            <SEO title="Player" />
            <div className="player-container">
                <div className="player-section">
                    <iframe title="Player" className="player" type="text/html" src={videoSrc} frameBorder="0" />
                </div>
                <div className="video-info">
                    <div className="meta-data">
                        <Link to="/">Home</Link>
                        <div className="title">{videoObj.title}</div>
                        <div className="summary">{videoObj.summary}</div>
                        <ul>
                            <li>
                                <img src={videoObj.event_logo} /> {videoObj.event_name}
                            </li>
                            <li>
                                <span>🕒</span>
                                {videoObj.event_date}
                            </li>
                            <li>
                                <span>📌 </span>London
                            </li>
                            <li>
                                <span>🎙</span>
                                {videoObj.speakers.map((speaker, key) => (
                                    <span key={key}>
                                        <a href={speaker.profile} target="noopenerrer noreferer">
                                            {speaker.name}
                                        </a>
                                    </span>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayThisTalkPage

export const pageQuery = graphql`
    query PlayThisTalkQuery($obj_id: String) {
        single: allRtTalks(filter: { _id: { eq: $obj_id } }) {
            nodes {
                _id
                added_date
                domain_name
                event_date
                event_logo
                event_name
                id
                summary
                tags
                thumbnail
                title
                url
                views
                speakers {
                    name
                    profile
                }
            }
        }
    }
`
