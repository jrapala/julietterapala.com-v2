import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import About from '../components/About'
import Projects from '../components/Projects'
import Writing from '../components/Writing'
import Email from '../components/Email'

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
		<About />
		<Projects />
		<Writing />
		<Email />
	</Layout>
)

export default App
