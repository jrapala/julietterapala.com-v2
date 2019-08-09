import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const App = () => (
	<Layout>
		<SEO
			title="Juliette Rapala"
			keywords={[
				`juliette rapala`,
				`javascript`,
				`developer`,
				`react`,
				`react native`,
			]}
		/>
		<h1>Home</h1>
		<footer>© {new Date().getFullYear()} Juliette Rapala</footer>
	</Layout>
)

export default App
