import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SectionTitle from '../elements/SectionTitle'
import MasterTourLogo from '../elements/MasterTourLogo'

const Container = styled.div`
	display: flex;

	@media screen and (max-width: 480px) {
		align-items: center;
		flex-direction: column;
	}
`

const Content = styled.div`
	padding: 0 1.5em;
`

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
			<Container>
				{section === 'work' && <MasterTourLogo />}
				<Content
					dangerouslySetInnerHTML={{
						__html: content,
					}}
				/>
			</Container>
		</Fragment>
	)
}

export default About
