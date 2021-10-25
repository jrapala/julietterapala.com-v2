require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Juliette Rapala | Software Engineer`,
    siteUrl: `https://julietterapala.com`,
    description: `I build web and mobile experiences that work for all people.`,
    author: `Juliette Rapala`,
    twitterUsername: `@julietter`,
    social: {
      twitter: `https://twitter.com/julietter`,
      linkedin: `https://linkedin.com/in/julietterapala`,
      github: `https://github.com/jrapala`,
    },
    portfolio: [
      {
        title: 'Reaction Radio',
        description: `Spotify’s API provides a multitude of information about their library of songs, including measures of audio features, such as song valence (or as we like to call it, "positivity") and song energy. These features can correlate with mood. A song high on the valence and energy scales is going to be happy!
          Reaction Radio allows you create a playlist of songs, see how they fall on a mood chart, and then lets you edit and sort by mood. Once you have a playlist that you are satisfied with, you can easily export it to your Spotify account.`,
        link: 'https://reaction-radio.herokuapp.com/',
      },
      {
        title: 'The Chicago Doula Project [WIP]',
        description: `The Chicago Doula Project is a  <a href="https://github.com/chihacknight" alt="ChiHackNight" target="_blank" rel='noopener noreferrer'>@chihacknight</a> creation that is helping connect Chicago-based women with a doulas to provide support during pregnancy, childbirth, and postpartum period.`,
        link: 'https://chicago-doula-project.herokuapp.com/',
      },
    ],
    footer: `Juliette Rapala`,
    email: `<p>Send me a note!<br/><a href="mailto:hello@julietterapala.com">hello@julietterapala.com</a></p>`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
