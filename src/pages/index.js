import React, { Fragment } from 'react'
import Layout from '../components/Layout'

const App = () => (
	<Fragment>
		<Layout>
			<h1>Home</h1>
			<footer>© {new Date().getFullYear()} Juliette Rapala</footer>
		</Layout>
	</Fragment>
)

export default App
