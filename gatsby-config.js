require('dotenv').config({
	path: `.env`,
})

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
		about: {
			content: `<p>I am a web developer and software engineer who specializes in JavaScript and React.</p>`,
			title: `Hi, I’m Juliette 👋`,
		},
		work: {
			content: `<p>I currently work for <a href="http://www.eventric.com" alt="Eventric" target="_blank" rel="noopener noreferrer">Eventric</a> where we build live event and tour management software solutions. I’m part of the team that has designed and developed <a href="https://www.eventric.com/master-tour-3/" alt="Master Tour 3.0" target="_blank" rel="noopener noreferrer">Master Tour 3.0</a>, a React app built with Electron. I also lead the development team for <a href="https://www.eventric.com/master-tour-3/" alt="Master Tour Mobile" target="_blank" rel="noopener noreferrer">Master Tour Mobile</a>, an <a href="https://play.google.com/store/apps/details?id=com.eventric.mastertour&hl=en_US" alt="Master Tour Mobile for Android" target="_blank" rel="noopener noreferrer">Android</a>/<a href="https://apps.apple.com/us/app/master-tour-mobile/id347364187" alt="Master Tour Mobile for iOS" target="_blank" rel="noopener noreferrer">iOS</a> app built with React Native.</p>`,
			title: `What I Do For Work:`,
		},
		fun: {
			content: `<p><ul><li><b>Code!</b> I love learning new things, such as Gatsby and GraphQL, and building apps to learn it (this site was built using both of those!). <a href="/projects" alt="Projects" rel='noopener noreferrer'>You can see more of my projects here.</a></li><li><b>Write!</b> I like to write about things that I am learning. I also write a lot about React Native, to try to make it more accessible to React developers. <a href="/writing" alt="Writing" rel='noopener noreferrer'>You can read some of my posts here.</a></li><li><b>Travel!</b></ul></p>`,
			title: `What I Do For Fun:`,
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
				trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-source-instagram-all`,
			options: {
				access_token: process.env.INSTAGRAM_TOKEN,
			},
		},
	],
}
