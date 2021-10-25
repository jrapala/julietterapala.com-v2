import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
import { Location } from '@reach/router';
import JRLogo from '../elements/JRLogo';
import VisuallyHidden from '../components/VisuallyHidden';

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
`;

const Nav = styled.nav`
  display: flex;
  margin-top: 0.25rem;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;

    li {
      margin: 0;
      margin-right: 0.5rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media screen and (min-width: 520px) {
    display: block;
  }
`;

const NavLinkImage = styled(Link)`
  margin-top: 0.75em;
  width: 100%;

  @media screen and (min-width: 520px) {
    margin: 2em 1em 0 1em;
    width: auto;
  }
`;

const NavLinkText = styled(Link)`
  color: ${props => props.theme.colors.neutralMedium};
  font-weight: ${props => props.theme.fonts.primary.semiBold};
  text-decoration: none;
  padding: 0.25rem;

  &.active {
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    transition: all 200ms ease-in-out;
  }
`;

const SkipLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: absolute;

  li {
    margin: 0;
    min-width: 200px;
    min-height: 72px;

    a {
      background-color: ${({ theme: { colors } }) => colors.background};
      border: 1px solid ${({ theme: { colors } }) => colors.neutralLight};
      color: ${({ theme: { colors } }) => colors.text};
      opacity: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      text-decoration: underline;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: -1;

      &:focus {
        opacity: 1;
        z-index: 2;
      }
    }
  }
`;

const Header = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <SkipLinks>
        <li>
          <a href="#main">Skip to main content</a>
        </li>
      </SkipLinks>
      <NavLinkImage to="/" activeClassName="active" tabIndex={-1}>
        <VisuallyHidden>Juliette Rapala</VisuallyHidden>
        <JRLogo />
      </NavLinkImage>
      <Nav>
        <ul>
          <li>
            <NavLinkText to="/" activeClassName="active">
              Home
            </NavLinkText>
          </li>
          <li>
            <NavLinkText to="/about" activeClassName="active">
              About
            </NavLinkText>
          </li>
          <li>
            <Location>
              {({ location: { pathname } }) => {
                return (
                  <NavLinkText
                    to="/blog"
                    activeClassName="active"
                    className={pathname && pathname.indexOf('blog') > -1 ? 'active' : null}
                  >
                    Blog
                  </NavLinkText>
                );
              }}
            </Location>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
