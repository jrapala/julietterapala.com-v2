import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageTitle from '../elements/PageTitle'
import Section from '../components/Section'

const About = () => (
	<Layout>
		<Seo title="About Me" />
		<PageTitle>About</PageTitle>
		<Section section="about" />
		<Section section="work" />
		<Section section="fun" />
	</Layout>
)

export default About
