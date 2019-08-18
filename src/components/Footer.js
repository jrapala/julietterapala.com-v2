import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SocialIcons from './SocialIcons'

const Container = styled.footer`
	color: ${props => props.theme.colors.lightGray};
	text-align: center;

	> div {
		color: ${props => props.theme.colors.mediumGray};
	}

	> p {
		font-size: 0.75em;
		margin-top: 1em;
	}
`

const Footer = () => {
	const data = useStaticQuery(graphql`
		query FooterQuery {
			site {
				siteMetadata {
					footer
				}
			}
		}
	`)
	return (
		<Container>
			<SocialIcons />
			<p>
				&copy; {new Date().getFullYear()}{' '}
				{data.site.siteMetadata.footer}{' '}
			</p>
		</Container>
	)
}

export default Footer
