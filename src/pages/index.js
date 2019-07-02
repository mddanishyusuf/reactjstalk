import React from 'react'
import { Link, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroCard from '../components/heroCard'
import Card from '../components/card'

function IndexPage({ data }) {
    const talksArray = data.talks.nodes
    const firstObj = talksArray[0]
    const restObjs = talksArray.slice(1)
    // console.log(talksArray.)
    return (
        <Layout>
            <SEO title="Home" />
            <div className="hero-section">
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <Link to={`/play/${firstObj._id}`}>
                            <HeroCard item={firstObj} />
                        </Link>
                    </Col>
                </Row>
            </div>
            <div className="container-cards">
                <Row>
                    {restObjs.map((talkObj, key) => (
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
        talks: allRtTalks(filter: { _id: { ne: null } }) {
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
