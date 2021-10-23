import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin-top: 20%;
	margin-bottom: 3rem;

	@media screen and (min-width: 520px) {
		margin-top: 0;
		margin-bottom: 0;
		height: calc(100vh - 3.5rem - 5rem);
	}
`

const Title = styled.h1`
	font-size: 4rem;
	margin-bottom: 6px;

	@media screen and (min-width: 520px) {
		font-size: 4.5rem;
	}
`

const Subtitle = styled.p`
	color: ${({ theme: { colors } }) => colors.primary};
	font-family: ${({ theme: { fonts } }) => fonts.secondary.fontFamily};
	font-size: 1.75rem;
	font-weight: ${({ theme: { fonts } }) => fonts.secondary.light};
	margin-top: 0;
	margin-bottom: 5rem;

	@media screen and (min-width: 520px) {
		font-size: 2.25rem;
	}
`

const Tagline = styled.p`
	font-family: ${({ theme: { fonts } }) => fonts.secondary.fontFamily};
	font-size: 1.5rem;
	font-weight: ${({ theme: { fonts } }) => fonts.secondary.light};

	@media screen and (min-width: 520px) {
		font-size: 1.75rem;
	}

	em {
		color: ${({ theme: { colors } }) => colors.primary};
		font-style: normal;
		font-weight: ${({ theme: { fonts } }) => fonts.secondary.semiBold};
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
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Tagline
				dangerouslySetInnerHTML={{
					__html: tagline,
				}}
			/>
		</Container>
	)
}

export default Hero
