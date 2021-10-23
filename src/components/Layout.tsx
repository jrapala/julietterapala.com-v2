import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import { theme } from '../styles/theme'
import Header from './Header'
import Footer from './Footer'

const Main = styled.main`
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 880px;
	padding-top: 0px;
`

const Layout: FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Header />
		<Main>{children}</Main>
		<Footer />
	</ThemeProvider>
)

export default Layout
