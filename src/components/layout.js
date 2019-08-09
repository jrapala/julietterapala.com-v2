import React, { Fragment } from 'react'
import GlobalStyle from '../utils/globalStyle'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
	<Fragment>
		<Header />
		<GlobalStyle />
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 880,
				padding: `0px 1.0875rem 1.45rem`,
				paddingTop: '0',
			}}
		>
			<main>{children}</main>
		</div>
		<Footer />
	</Fragment>
)

export default Layout
