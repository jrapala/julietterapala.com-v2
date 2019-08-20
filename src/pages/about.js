import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'

const About = () => (
	<Layout>
		<SEO title="About Me" />
		<PageTitle title="About" />
		<Section section="about" />
		<Section section="work" />
		<Section section="fun" />
	</Layout>
)

export default About
