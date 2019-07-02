/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const playerTemplate = path.resolve(`src/templates/player.js`)

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
                        posts: allRtTalks(filter: { _id: { ne: null } }) {
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
            ).then(result => {
                result.data.posts.nodes.forEach(x => {
                    // loop over split pages
                    createPage({
                        path: `/play/${x._id}`,
                        component: playerTemplate,
                        context: {
                            obj_id: x._id,
                        },
                    })
                })
            })
        )
    })
}
