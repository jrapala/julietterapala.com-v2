import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import SectionTitle from '../elements/SectionTitle'
import MasterTourLogo from '../elements/MasterTourLogo'

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media screen and (min-width: 520px) {
		flex-direction: row;
		justify-content: space-between;
	}
`

const ImageContent = styled.div`
	display: flex;
	order: -1;
	margin-top: 1rem;
	margin-bottom: 1rem;

	@media screen and (min-width: 520px) {
		order: 2;
		padding: 0 1.5rem;
		margin-top: -3.5rem;
		margin-bottom: -2rem;
	}
`

const About = ({ section }) => {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			image: file(relativePath: { eq: "profile-image.jpg" }) {
				childImageSharp {
					gatsbyImageData(width: 200, placeholder: BLURRED)
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
	const image = getImage(data.image)

	return (
		<Fragment>
			<SectionTitle>{title}</SectionTitle>
			<Container>
				{section === 'about' && (
					<ImageContent>
						<GatsbyImage
							image={image}
							alt="Headshot of Juliette Rapala"
							style={styles.imageWrapper}
							imgStyle={styles.image}
						/>
					</ImageContent>
				)}
				{section === 'work' && <MasterTourLogo />}
				<div
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
		height: '200px',
		overflow: 'hidden',
		width: '200px',
	},
}

export default About
