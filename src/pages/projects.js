import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageTitle from '../elements/PageTitle'
import Platform from '../elements/Platform'
import ButtonSolid from '../elements/ButtonSolid'

const Row = styled.div`
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 780px) {
		align-items: center;
		flex-direction: column;
	}
`

const Column = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`

const Screenshots = styled(Column)`
	margin-top: -10%;
	width: 60%;

	@media screen and (max-width: 780px) {
		width: 100%;
	}
`

const Subtitle = styled.h4`
	margin-bottom: 0.25em;
`

const Authors = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;

	a {
		font-weight: ${(props) => props.theme.fonts.primary.regular};
		margin: 0 0.1em;
	}
`

const StyledImage = styled(GatsbyImage)`
	display: flex;
	margin: 0 auto;
	overflow: hidden;
	width: 22em;

	@media screen and (max-width: 780px) {
		margin-bottom: -10%;
		margin-left: -10%;
		margin-right: -10%;
		width: 140%;
	}
`

const Tech = styled.p`
	text-align: center;
`
const About = () => {
	const data = useStaticQuery(graphql`
		query {
			reactionRadio01: file(relativePath: { eq: "reactionRadio01.png" }) {
				childImageSharp {
					gatsbyImageData(width: 400, placeholder: BLURRED)
				}
			}
			reactionRadio02: file(relativePath: { eq: "reactionRadio02.png" }) {
				childImageSharp {
					gatsbyImageData(width: 400, placeholder: BLURRED)
				}
			}
		}
	`)
	const reactionRadioImage01 = getImage(data.reactionRadio01)
	const reactionRadioImage02 = getImage(data.reactionRadio02)

	return (
		<Layout>
			<Seo title="Projects" />
			<PageTitle title="Projects" />
			<Platform>
				<h2>Reaction Radio</h2>
				<Row>
					<p>
						Spotify’s API provides a multitude of information about
						their library of songs, including measures of audio
						features, such as song valence (or as we like to call
						it, &quot;positivity&quot;) and song energy. These
						features can correlate with mood. A song high on the
						valence and energy scales is going to be happy! Reaction
						Radio allows you create a playlist of songs, see how
						they fall on a mood chart, and then lets you edit and
						sort by mood. Once you have a playlist that you are
						satisfied with, you can easily export it to your Spotify
						account.
					</p>
					<Screenshots>
						<StyledImage
							image={reactionRadioImage01}
							alt="Reaction Radio Screenshot"
							imgStyle={styles.image}
						/>
						<StyledImage
							image={reactionRadioImage02}
							alt="Reaction Radio Screenshot"
							imgStyle={styles.image}
						/>
					</Screenshots>
				</Row>
				<Row>
					<Column
						css={css`
							width: 40%;
							@media screen and (max-width: 780px) {
								width: 100%;
							}
						`}
					>
						<div
							css={css`
								margin-top: 2em;
								width: 100%;
							`}
						>
							<ButtonSolid url="https://reaction-radio.herokuapp.com/">
								See Project
							</ButtonSolid>
							<ButtonSolid url="https://github.com/Reaction-App/reaction">
								See Repo
							</ButtonSolid>
						</div>
					</Column>
					<Column
						css={css`
							width: 60%;
						`}
					>
						<Subtitle>Tech Used</Subtitle>
						<Tech
							css={css`
								margin-top: 0;
							`}
						>
							React, Material UI, Highcharts, MongoDB, Node.js,
							Express, HTML, CSS, JavaScript, Heroku, mLab
						</Tech>
						<Subtitle>Authors</Subtitle>
						<Authors>
							<a
								href="https://github.com/victoriapalacios"
								target="_blank"
								rel="noopener noreferrer"
								alt="Victoria Palacios' GitHub"
							>
								@victoriapalacios
							</a>
							<a
								href="https://github.com/jrapala"
								target="_blank"
								rel="noopener noreferrer"
								alt="Juliette Rapala's GitHub"
							>
								@jrapala
							</a>
							<a
								href="https://github.com/markwalkernz"
								target="_blank"
								rel="noopener noreferrer"
								alt="Mark Walkers' GitHub"
							>
								@markwalkernz
							</a>
						</Authors>
					</Column>
				</Row>
			</Platform>
		</Layout>
	)
}

const styles = {
	image: {
		height: '100%',
		width: 'auto',
	},
}

export default About
