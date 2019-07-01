import React from 'react'
import { Link, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import HeroCard from '../components/heroCard'
import Card from '../components/card'

function IndexPage({ data }) {
    const talksArray = data.talks.nodes
    // console.log(talksArray.)
    return (
        <Layout>
            <SEO title="Home" />
            <Row>
                {talksArray.map((talkObj, key) => (
                    <Col xs="12" sm={key === 0 ? 12 : 6} md={key === 0 ? 12 : 4} key={talkObj._id}>
                        {key === 0 ? <HeroCard item={talkObj} /> : <Card item={talkObj} />}
                    </Col>
                ))}
            </Row>
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
