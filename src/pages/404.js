import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageTitle from '../elements/PageTitle'

const Container = styled.div`
	display: flex;
	margin-left: 1.5em;
`

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO title="404: Not Found" />
			<PageTitle title="Not Found" />
			<Container>
				<p>
					You just hit a route that doesn&#39;t exist... the sadness.
				</p>
			</Container>
		</Layout>
	)
}

export default NotFoundPage
