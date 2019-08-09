import React, { Fragment } from 'react'
import GlobalStyle from '../utils/globalStyle'

const Layout = ({ children }) => (
	<Fragment>
		<GlobalStyle />
		<div>
			<main>{children}</main>
		</div>
	</Fragment>
)

export default Layout
