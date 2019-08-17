import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

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
		<Hero />
	</Layout>
)

export default App
