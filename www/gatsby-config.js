module.exports = {
  siteMetadata: {
    title: 'Mozart.js',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#3caf49',
        theme_color: '#3caf49',
        display: 'minimal-ui',
        icon: 'src/images/mozart-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}