import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../components/Logo'

const Container = styled.header`
	align-items: center;
	border-bottom: 1px solid ${props => props.theme.colors.lightGray};
	display: flex;
	height: 3em;
	text-align: center;
`

const NavLinkImage = styled(Link)`
	color: ${props => props.theme.colors.mediumGray};
	margin: 0 0.5rem 0 0.5rem;
	padding: 0.25rem;
	width: 8em;

	&.current-page {
		color: ${props => props.theme.colors.primary};
	}

	@media screen and (max-width: 480px) {
		margin-top: 0.1em;
		width: 100%;
	}
`

const NavLinkText = styled(Link)`
	/* padding: 2em; */
	color: ${props => props.theme.colors.mediumGray};
	font-size: 1rem;
	font-weight: ${props => props.theme.font.primary.semiBold};
	margin: 0 0.5rem 0 0;
	padding: 0.25rem;
	text-decoration: none;

	&.current-page {
		color: ${props => props.theme.colors.primary};
	}

	@media screen and (max-width: 480px) {
		display: none;
	}
`

const Nav = styled.nav`
	margin-top: 0.1em;
`

const Header = () => (
	<Container>
		<NavLinkImage to="/" activeClassName="current-page">
			<Logo />
		</NavLinkImage>
		<Nav>
			<NavLinkText to="/about" activeClassName="current-page">
				About
			</NavLinkText>
			<NavLinkText to="/projects" activeClassName="current-page">
				Project
			</NavLinkText>
			<NavLinkText to="/writing" activeClassName="current-page">
				Writing
			</NavLinkText>
		</Nav>
	</Container>
)

export default Header
