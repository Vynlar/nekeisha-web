module.exports = {
  siteMetadata: {
    title: `Nekeisha Johnson`,
    description: `Teaching website of Nekeisha Johnson NDSU`,
    author: `@Vynlar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: { isUsingColorMode: false },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assignments`,
        path: `${__dirname}/src/assignments`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [require(`remark-math`)],
        rehypePlugins: [require(`rehype-katex`)],
        gatsbyRemarkPlugins: [`gatsby-remark-prismjs`],
        defaultLayouts: {
          assignments: require.resolve(`./src/components/assignment-layout.js`),
          default: require.resolve(`./src/components/default-layout.js`),
        },
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
