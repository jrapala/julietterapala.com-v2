import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageTitle from '../elements/PageTitle'
import Section from '../components/Section'
// import Instagram from '../components/Instagram'

const About = () => (
	<Layout>
		<Seo title="About Me" />
		<PageTitle title="About" />
		<Section section="about" />
		<Section section="work" />
		<Section section="fun" />
		{/* <Instagram /> */}
	</Layout>
)

export default About
