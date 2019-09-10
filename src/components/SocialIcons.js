import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
	faTwitter,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Icon from '../elements/Icon'

const socialSites = {
	twitter: {
		url: 'https://twitter.com/',
	},
	github: {
		url: 'https://github.com/',
	},
	linkedin: {
		url: 'https://linkedin.com/in/',
	},
}

const SocialIcons = () => {
	const data = useStaticQuery(graphql`
		query SocialIcons {
			site {
				siteMetadata {
					social {
						twitter
						github
						linkedin
					}
				}
			}
		}
	`)
	const { twitter, github, linkedin } = data.site.siteMetadata.social
	return (
		<div>
			<Icon
				icon={faTwitter}
				url={`${socialSites.twitter.url}${twitter}`}
				alt="Link to Juliette's Twitter"
			/>
			<Icon
				icon={faGithub}
				url={`${socialSites.github.url}${github}`}
				alt="Link to Juliette's GitHub"
			/>
			<Icon
				icon={faLinkedin}
				url={`${socialSites.linkedin.url}${linkedin}`}
				alt="Link to Juliette's LinkedIn"
			/>
		</div>
	)
}
export default SocialIcons
