import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SectionTitle from './SectionTitle'

const About = ({ section }) => {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			site {
				siteMetadata {
					about {
						content
						title
					}
					work {
						content
						title
					}
					fun {
						content
						title
					}
				}
			}
		}
	`)

	const content = data.site.siteMetadata[section].content
	const title = data.site.siteMetadata[section].title

	return (
		<Fragment>
			<SectionTitle title={title} />
			<div
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
		</Fragment>
	)
}

export default About
