import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../utils/globalStyle'
import { theme } from '../utils/theme'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<Header />
			<GlobalStyle />
			<div
				style={{
					margin: '0 auto',
					maxWidth: 880,
					paddingTop: 0,
				}}
			>
				<main>{children}</main>
			</div>
			<Footer />
		</Fragment>
	</ThemeProvider>
)

export default Layout
