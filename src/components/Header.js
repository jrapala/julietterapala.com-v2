import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import JRLogo from '../elements/JRLogo'

const Container = styled.header`
	align-items: center;
	border-bottom: 1px solid ${props => props.theme.colors.lightGray};
	display: flex;
	height: 3em;
	text-align: center;

	@media screen and (max-width: 520px) {
		height: 7.5em;
		flex-direction: column;
	}
`

const NavLinkImage = styled(Link)`
	margin: 2em 1em 0 1em;

	@media screen and (max-width: 520px) {
		margin-top: 0.75em;
		width: 100%;
	}
`

const NavLinkText = styled(Link)`
	color: ${props => props.theme.colors.mediumGray};
	font-size: 1rem;
	font-weight: ${props => props.theme.font.primary.semiBold};
	margin: 0 0.5rem 0 0;
	padding: 0.25rem;
	text-decoration: none;

	&.current-page {
		color: ${props => props.theme.colors.primary};
	}

	&:hover {
		color: ${props => props.theme.colors.primary};
		transition: all 200ms ease-in-out;
	}
`

const Nav = styled.nav`
	margin-top: 0.1em;
	@media screen and (max-width: 520px) {
		display: flex;
	}
`

const Header = () => {
	return (
		<Container>
			<NavLinkImage to="/" activeClassName="current-page">
				<Location>
					{({ location }) => {
						return location.pathname === '/' ? (
							<JRLogo color="#C92BBA" />
						) : (
							<JRLogo />
						)
					}}
				</Location>
			</NavLinkImage>
			<Nav>
				<NavLinkText to="/about" activeClassName="current-page">
					About
				</NavLinkText>
				<NavLinkText to="/projects" activeClassName="current-page">
					Projects
				</NavLinkText>
				<NavLinkText to="/writing" activeClassName="current-page">
					Writing
				</NavLinkText>
			</Nav>
		</Container>
	)
}

export default Header
