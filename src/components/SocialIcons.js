import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
	faTwitter,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import IconLink from '../elements/IconLink'

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
			<IconLink
				icon={faTwitter}
				url={`${socialSites.twitter.url}${twitter}`}
				description="Juliette's Twitter"
			/>
			<IconLink
				icon={faGithub}
				url={`${socialSites.github.url}${github}`}
				description="Juliette's GitHub"
			/>
			<IconLink
				icon={faLinkedin}
				url={`${socialSites.linkedin.url}${linkedin}`}
				description="Juliette's LinkedIn"
			/>
		</div>
	)
}
export default SocialIcons
