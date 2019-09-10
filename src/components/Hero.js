import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { withTheme } from 'styled-components'

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh - 3em;

	> * {
		margin-top: 0.2em;
		text-align: center;
	}

	h1 {
		font-size: 4rem;
		margin-bottom: 0.1em;
		margin-top: 2em;
		width: 100vw;
	}

	h2 {
		color: ${props => props.theme.colors.pink};
		font-family: ${props => props.theme.font.secondary.fontFamily};
		font-size: 2em;
		font-weight: ${props => props.theme.font.secondary.light};
		margin-top: 0em;
		padding: 2;
	}

	h3 {
		font-family: ${props => props.theme.font.secondary.fontFamily};
		font-size: 1.5em;
		font-weight: ${props => props.theme.font.secondary.light};
		margin-top: 2em;
	}

	@media screen and (max-width: 520px) {
		h1 {
			font-size: 3.5em;
			margin-top: 20%;
			width: 90vw;
		}
		h2 {
			font-size: 1.5em;
			width: 90vw;
		}
		h3 {
			font-size: 1.25em;
			width: 90vw;
		}
	}
`

const Hero = () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						subtitle
						tagline
					}
				}
			}
		`
	)

	const { title, subtitle, tagline } = data.site.siteMetadata

	return (
		<Container>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<h3>{tagline}</h3>
		</Container>
	)
}

export default withTheme(Hero)
