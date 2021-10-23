import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Link } from 'gatsby'
// eslint-disable-next-line import/no-unresolved
import { Location } from '@reach/router'
import JRLogo from '../elements/JRLogo'
import VisuallyHidden from '../components/VisuallyHidden'

const Container = styled.header`
	height: 9rem;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.neutralLight};

	@media screen and (min-width: 520px) {
		height: 3.5rem;
		flex-direction: row;
	}
`

const NavLinkImage = styled(Link)`
	margin-top: 0.75em;
	width: 100%;

	@media screen and (min-width: 520px) {
		margin: 2em 1em 0 1em;
		width: auto;
	}
`

const NavLinkText = styled(Link)`
	color: ${(props) => props.theme.colors.neutralMedium};
	font-weight: ${(props) => props.theme.fonts.primary.semiBold};
	text-decoration: none;
	padding: 0.25rem;

	&.current-page {
		color: ${(props) => props.theme.colors.primary};
	}

	&:hover {
		color: ${(props) => props.theme.colors.primary};
		transition: all 200ms ease-in-out;
	}
`

const Nav = styled.nav`
	display: flex;

	a {
		margin-right: 0.5rem;

		&:last-child {
			margin-right: 0;
		}
	}

	@media screen and (min-width: 520px) {
		display: block;
	}
`

const Header = () => {
	const { colors } = useContext(ThemeContext)

	return (
		<Container>
			<NavLinkImage to="/" activeClassName="current-page">
				<VisuallyHidden>Juliette Rapala</VisuallyHidden>
				<Location>
					{({ location }) => {
						return location.pathname === '/' ? (
							<JRLogo color={colors.primary} />
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
				<NavLinkText to="/writing" activeClassName="current-page">
					Writing
				</NavLinkText>
			</Nav>
		</Container>
	)
}

export default Header
