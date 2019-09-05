import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import SectionTitle from '../elements/SectionTitle'
import MasterTourLogo from '../elements/MasterTourLogo'

const Container = styled.div`
	display: flex;

	@media screen and (max-width: 600px) {
		align-items: center;
		flex-direction: column;
	}
`

const Content = styled.div`
	display: flex;
	padding: 0 1.5em;
`

const ImageContent = styled.div`
	display: flex;
	margin-bottom: -2em;
	margin-right: 7em;
	margin-top: -3.5em;
	order: 2;
	padding: 0 1.5em;

	@media screen and (max-width: 600px) {
		margin: 0 auto;
		order: -1;
	}
`

const About = ({ section }) => {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			image: file(relativePath: { eq: "profile-image.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
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
				{section === 'about' && (
					<ImageContent>
						<Image
							fluid={data.image.childImageSharp.fluid}
							alt="Juliette Rapala"
							style={styles.imageWrapper}
							imgStyle={styles.image}
						/>
					</ImageContent>
				)}
				<Content
					dangerouslySetInnerHTML={{
						__html: content,
					}}
				/>
			</Container>
		</Fragment>
	)
}

const styles = {
	image: {
		height: '100%',
		width: 'auto',
	},
	imageWrapper: {
		borderRadius: '50%',
		display: 'flex',
		order: 2,
		height: '200px',
		overflow: 'hidden',
		width: '200px',
	},
}

export default About
