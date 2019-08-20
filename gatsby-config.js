module.exports = {
	siteMetadata: {
		title: `Juliette Rapala`,
		subtitle: `Software Developer`,
		tagline: `I build JavaScript apps for the web, mobile, and desktop`,
		description: `I build JavaScript apps for the web, mobile, and desktop`,
		author: `@jrapala`,
		social: {
			twitter: `julietter`,
			linkedin: `julietterapala`,
			github: `jrapala`,
		},
		about: `<p>I'm a software developer for <a href='http://www.eventric.com' alt="Eventric" target='_blank' rel='noopener noreferrer'>Eventric</a>.</p>
    <p>Eventric is the leading SaaS developer of live event and tour management software solutions. We power efficiency and measurable bottom-line profitability for event production and tour management. We’ve designed and cultivated our web, mobile, and cloud solutions Master Tour and Live Access to precisely benefit the needs of the top professionals across music, tv/film, sports, production, corporate, and touring industries.</p>`,
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
		`gatsby-plugin-feed`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
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
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}
