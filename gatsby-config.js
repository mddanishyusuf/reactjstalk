module.exports = {
    siteMetadata: {
        title: `ReactJsTalk`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                // Type prefix of entities from server
                typePrefix: 'rt__',

                // The url, this should be the endpoint you are attempting to pull data from
                url: `https://reactjstalk.glitch.me/getArticles?page=1&per_page=10000&sort=desc`,

                method: 'get',

                auth: false,

                headers: {
                    'Content-Type': 'application/json',
                },

                data: {},

                name: 'talks',

                entityLevel: `docs`,

                localSave: true,

                path: `${__dirname}/db/`,

                verboseOutput: true,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Poppins`,
                        variants: [`400`, `700`, `500`],
                    },
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
