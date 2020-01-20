/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Charlie FN Rogers`,
    author: `charlieFNrogers`
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options:
      {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `z60j10q2700j`, //process.env.CONTENTFUL_SPACE_ID,
        accessToken: `0SKICb7vUTLUhxPgmQbXkcKqu207l7y4gKFDpn1C4zE`//process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}
