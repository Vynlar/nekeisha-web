module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    courses: [
      {
        name: "MATH420",
        year: 2020,
        semester: "Spring",
      },
      {
        name: "PHYS430",
        year: 2020,
        semester: "Spring",
      },
      {
        name: "PHYS445",
        year: 2020,
        semester: "Spring",
      },
    ],
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
    /*
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/assignments`,
      },
    },
    */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [require(`remark-math`)],
        rehypePlugins: [require(`rehype-katex`)],
        gatsbyRemarkPlugins: [`gatsby-remark-prismjs`],
        defaultLayouts: {
          assignments: require.resolve(`./src/components/assignment-layout.js`),
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
