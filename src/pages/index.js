import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'

const App = () => (
	<Layout>
		<Seo
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
