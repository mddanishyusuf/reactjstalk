import React from 'react'
import { Link, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroCard from '../components/heroCard'
import Card from '../components/card'

function IndexPage({ data }) {
    const talksArray = data.talks.nodes
    const featured = data.featured.nodes[0]
    // console.log(talksArray.)
    return (
        <Layout>
            <SEO title="Home" />
            <div className="hero-section">
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <HeroCard item={featured} />
                    </Col>
                </Row>
            </div>
            <div className="container-cards">
                <Row>
                    {talksArray.map((talkObj, key) => (
                        <Col xs="12" sm="6" md="4" key={talkObj._id}>
                            <Link to={`/play/${talkObj._id}`}>
                                <Card item={talkObj} />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
        talks: allRtTalks(
            filter: { _id: { ne: null }, featured: { eq: 0 } }
            sort: { fields: [event_date], order: DESC }
        ) {
            nodes {
                _id
                added_date
                domain_name
                event_date
                event_logo
                event_name
                event_location
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
        featured: allRtTalks(
            filter: { _id: { ne: null }, featured: { eq: 1 } }
            sort: { fields: [event_date], order: DESC }
        ) {
            nodes {
                _id
                added_date
                domain_name
                event_date
                event_logo
                event_name
                event_location
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
